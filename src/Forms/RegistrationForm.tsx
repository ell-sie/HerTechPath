/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { zodResolver } from "@hookform/resolvers/zod";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Interests, Levels, Path, SoftSkills, TechSkills } from "../API";
import InputField from "../components/shared/InputField";
import SelectInput from "../components/shared/SelectInput";
import SharedButton from "../components/shared/SharedButton";
import { useAddPathMutation } from "../hooks/path";
import { useResourcesQuery } from "../hooks/resources";
import { useAddUserMutation } from "../hooks/users/useAddUsersMutation";
import { useUpdateUserMutation } from "../hooks/users/useUpdateUserMutation";
import { useUsersQuery } from "../hooks/users/useUsersQuery";
import { useAuthContext } from "../providers/AuthProvider";
import Spinner from "../assets/Spinner";

const ProfileUpdateSchema = z.object({
  // Ensure ID is required
  name: z.string().trim().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  technicalskills: z
    .array(z.unknown())
    .min(1, "Please select at least one skill"),
  softskills: z.array(z.unknown()).min(1, "Please select at least one skill"),
  shorttermgoals: z.string().min(1, "Please specify your short-term goals"),
  longtermgoals: z.string().min(1, "Please specify your long-term goals"),
  interests: z.array(z.unknown()).min(1, "Please select at least one interest"),
  hrsperweek: z.string().min(1, "Please specify hours per week"),
  feedback: z.string().optional(),
  challenges: z.string().optional(),
  motivation: z.string().optional(),
  level: z.nativeEnum(Levels),
});

const technicalSkillOptions = [
  { id: TechSkills.JAVA, label: "Java" },
  { id: TechSkills.PYTHON, label: "Python" },
  { id: TechSkills.JAVASCRIPT, label: "JavaScript" },
  { id: TechSkills.REACTJS, label: "React" },
  { id: TechSkills.TYPESCRIPT, label: "Typescript" },
];

const softSkillOptions = [
  { id: SoftSkills.COMMUNICATION, label: "Communication" },
  { id: SoftSkills.TEAMWORK, label: "Team work" },
  { id: SoftSkills.LEADERSHIP, label: "Leadership" },
];

const levelOptions = [
  { id: Levels.BEGINNER, label: "Beginner" },
  { id: Levels.INTERMEDIATE, label: "Intermediate" },
  { id: Levels.ADVANCED, label: "Advanced" },
];

const interestsOptions = [
  { id: Interests.WEBDEVELOPMENT, label: "Web Development" },
  { id: Interests.INTERVIEWSKILLS, label: "Interview Skills" },
  { id: Interests.MACHINELEARNING, label: "Machine Learning" },
];

type ProfileUpdateData = z.infer<typeof ProfileUpdateSchema>;

export default function RegistrationForm() {
  const {
    user: { user },
  } = useAuthContext();

  const navigate = useNavigate();

  const userId = user?.id;

  const { data: allResources } = useResourcesQuery();
  const { mutate: addPath } = useAddPathMutation();
  const [isGeneratingPath, setIsGeneratingPath] = useState(false);

  async function handleAddPath(pathData: Path) {
    try {
      addPath({ ...pathData, pathUserId: userId });
      toast.success("Path generated successfully");
    } catch (error) {
      console.error("Error during path generation:", error);
    }
  }

  const generatePath = async () => {
    setIsGeneratingPath(true);
    const response = await fetch(
      "https://hertechpath-awcng7e7g7gbhaew.germanywestcentral-01.azurewebsites.net/generate-user-path",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resources: allResources,
          userProfile: userData,
        }),
      }
    );

    const pathData = await response.json();

    await handleAddPath(pathData);
    toast.success("Path generated successfully");
    navigate("/home");
    setIsGeneratingPath(false);
  };

  const { control, handleSubmit, setValue, formState } =
    useForm<ProfileUpdateData>({
      resolver: zodResolver(ProfileUpdateSchema),
      defaultValues: {
        name: "",
        email: "",
        level: Levels.BEGINNER,
        technicalskills: [],
        softskills: [],
        shorttermgoals: "",
        longtermgoals: "",
        hrsperweek: "",
        interests: [],
        feedback: "",
        challenges: "",
        motivation: "",
      },
    });

  console.log(formState.errors);

  const { data: allUsers } = useUsersQuery();
  const { mutate: updateUser } = useUpdateUserMutation();

  const { mutate, isPending, error } = useAddUserMutation();

  const userData = allUsers?.find((user) => user.userId === userId);

  useEffect(() => {
    if (userData) {
      const user = userData;
      const userSoftSkills = user.softskills ?? [];
      const userTechnicalSkills = user.technicalskills ?? [];
      const userInterests = user.interests ?? [];

      setValue("name", user.name ?? "");
      setValue("email", user.email ?? "");
      setValue(
        "technicalskills",
        // @ts-ignore
        userTechnicalSkills.map((skill) =>
          technicalSkillOptions.find((item) => item.id === skill)
        )
      );
      setValue(
        "softskills",
        // @ts-ignore
        userSoftSkills.map((skill) =>
          softSkillOptions.find((item) => item.id === skill)
        )
      );
      setValue("shorttermgoals", user.shorttermgoals ?? "");
      setValue("longtermgoals", user.longtermgoals ?? "");
      setValue("hrsperweek", user.hrsperweek ?? "");
      setValue(
        "interests",
        // @ts-ignore
        userInterests.map((interest) =>
          interestsOptions.find((item) => item.id === interest)
        )
      );
      setValue("feedback", user.feedback ?? "");
      setValue("challenges", user.challenges ?? "");
      setValue("motivation", user.motivation ?? "");
      setValue("level", user.level ?? Levels.BEGINNER);
    }
  }, [userData]);

  console.log(userData);

  async function handleUpdate(data: ProfileUpdateData) {
    data.interests = data.interests.map((interest) => {
      const currentInterest = interest as any;
      return currentInterest.id ? currentInterest.id : currentInterest;
    });

    data.softskills = data.softskills.map((skill) => {
      const currentSkill = skill as any;
      return currentSkill.id ? currentSkill.id : currentSkill;
    });

    data.technicalskills = data.technicalskills.map((skill) => {
      const currentSkill = skill as any;
      return currentSkill.id ? currentSkill.id : currentSkill;
    });

    try {
      if (userData) {
        await updateUser({ ...data, userId, id: userData.id });
      } else {
        await mutate({ ...data, userId });
      }
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error during profile update:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="p-8">
          <p className="pb-4 text-2xl font-medium">Update Your Profile</p>
          <div className="grid gap-5 pt-2">
            <InputField control={control} label="Name" name="name" />
            <InputField control={control} label="Email" name="email" />
            {/* Technical Skills */}
            <Stack spacing={3}>
              <Controller
                name="technicalskills"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    multiple
                    options={technicalSkillOptions}
                    // @ts-ignore
                    value={field.value}
                    getOptionLabel={(option) => option.label}
                    onChange={(_event, value) => {
                      setValue("technicalskills", value);
                    }}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Technical Skills"
                        placeholder="Select skills"
                      />
                    )}
                  />
                )}
              />
            </Stack>
            {/* Soft Skills */}
            <Stack spacing={3}>
              <Controller
                name="softskills"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    multiple
                    options={softSkillOptions}
                    // @ts-ignore
                    value={field.value}
                    getOptionLabel={(option) => option.label}
                    onChange={(_event, value) => {
                      setValue("softskills", value);
                    }}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Soft Skills"
                        placeholder="Select skills"
                      />
                    )}
                  />
                )}
              />
            </Stack>
            {/* Learning Goals */}
            <InputField
              control={control}
              label="Short-Term Goals"
              name="shorttermgoals"
            />
            <InputField
              control={control}
              label="Long-Term Goals"
              name="longtermgoals"
            />
            {/* Time Commitment */}
            <InputField
              control={control}
              label="Hours per Week for Learning"
              name="hrsperweek"
            />
            {/* Subject Interests */}
            <Stack spacing={3}>
              <Controller
                name="interests"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    multiple
                    options={interestsOptions}
                    // @ts-ignore
                    value={field.value}
                    getOptionLabel={(option) => option.label}
                    onChange={(_event, value) => {
                      setValue("interests", value);
                    }}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Subject Interests"
                        placeholder="Select subjects"
                      />
                    )}
                  />
                )}
              />
            </Stack>
            {/* Feedback Style */}
            <InputField
              control={control}
              label="Preferred Feedback Style (e.g., Peer Review)"
              name="feedback"
            />
            {/* Current Challenges */}
            <InputField
              control={control}
              label="Current Challenges in Learning"
              name="challenges"
            />
            {/* Motivation Factors */}
            <InputField
              control={control}
              label="Motivation for Learning (e.g., Career Advancement)"
              name="motivation"
            />
            {/* Level Selection */}
            <SelectInput
              control={control}
              options={levelOptions}
              label="Level"
              name="level"
            />
          </div>
          {/* Submit Buttons */}
          <div className="mt-10 flex justify-between w-full gap-5">
            <Button variant="outlined" color="primary">
              {" "}
              Cancel{" "}
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isPending}
            >
              {" "}
              Update{" "}
            </Button>
          </div>
          {/* Error Handling */}
          {error && <p className="text-red-500">{error.message}</p>}
        </div>
      </form>
      <div className="flex flex-col justify-between items-center">
        <div></div>
        <div className="w-1/4 animate-bounce">
          {isGeneratingPath ? (
            <>Generating Path <Spinner className="size-8" /></>
          ) : (
            <SharedButton
              variant="contained"
              color="primary"
              onClick={generatePath}
            >
              Request path
            </SharedButton>
          )}
        </div>
      </div>
    </>
  );
}

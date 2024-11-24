// import { zodResolver } from "@hookform/resolvers/zod";
// import Button from "@mui/material/Button";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import InputField from "../components/shared/InputField";
// import SelectInput from "../components/shared/SelectInput";
// import Autocomplete from "@mui/material/Autocomplete";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import { Interests, Levels, SoftSkills, TechSkills } from "../API";
// import { useAddUserMutation } from "../hooks/users/useAddUsersMutation";
// import { useResourcesQuery } from "../hooks/resources";
// import { useUsersQuery } from "../hooks/users/useUsersQuery";

// const RegistrationFormSchema = z.object({
//   id: z.string().min(1).optional(),
//   name: z.string().trim().min(1, "Please enter your name"),
//   email: z.string().email("Please enter a valid email"),
//   technicalskills: z.array(z.nativeEnum(TechSkills)).min(1, "Please select at least one skill"),
//   softskills: z.array(z.nativeEnum(SoftSkills)).min(1, "Please select at least one skill"),
//   shorttermgoals: z.string().min(1, "Please specify your short-term goals"),
//   longtermgoals: z.string().min(1, "Please specify your long-term goals"),
//   interests: z.array(z.nativeEnum(Interests)).min(1, "Please select at least one interest"),
//   hrsperweek: z.string().min(1, "Please specify hours per week"),
//   feedback: z.string().optional(),
//   challenges: z.string().optional(),
//   motivation: z.string().optional(),
//   level: z.nativeEnum(Levels),
// });

// type RegistrationFormData = z.infer<typeof RegistrationFormSchema>;

// const technicalSkillOptions = [
//   { id: TechSkills.JAVA, label: "Java" },
//   { id: TechSkills.PYTHON, label: "Python" },
//   { id: TechSkills.JAVASCRIPT, label: "JavaScript" },
//   { id: TechSkills.REACTJS, label: "React" },
//   { id: TechSkills.TYPESCRIPT, label: "Typescript" },
// ];

// const softSkillOptions = [
//   { id: SoftSkills.COMMUNICATION, label: "Communication" },
//   { id: SoftSkills.TEAMWORK, label: "Team work" },
//   { id: SoftSkills.LEADERSHIP, label: "Leadership" },
// ];

// const levelOptions = [
//   { id: Levels.BEGINNER, label: "Beginner" },
//   { id: Levels.INTERMEDIATE, label: "Intermediate" },
//   { id: Levels.ADVANCED, label: "Advanced" },
// ];

// const interestsOptions = [
//   { id: Interests.WEBDEVELOPMENT, label: "Web Development" },
//   { id: Interests.INTERVIEWSKILLS, label: "Interview Skills" },
//   { id: Interests.MACHINELEARNING, label: "Machine Learning" },
// ];

// export default function RegistrationForm() {
//   const {
//     control,
//     handleSubmit,
//     setValue,
//     formState: { isSubmitSuccessful },
//   } = useForm<RegistrationFormData>({
//     resolver: zodResolver(RegistrationFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       level: Levels.BEGINNER,
//       technicalskills: [],
//       softskills: [],
//       shorttermgoals: "",
//       longtermgoals: "",
//       hrsperweek: "",
//       interests: [],
//       feedback: "",
//       challenges: "",
//       motivation: "",
//     },
//   });

//   const { data: resources } = useResourcesQuery();
//   const { data: users } = useUsersQuery();

//   const { mutate, isPending, error } = useAddUserMutation();

//   async function handleRegister(data: RegistrationFormData) {
//     try {
//       await mutate({
//         name: data.name,
//         email: data.email,
//         technicalskills: data.technicalskills,
//         softskills: data.softskills,
//         shorttermgoals: data.shorttermgoals,
//         longtermgoals: data.longtermgoals,
//         hrsperweek: data.hrsperweek,
//         interests: data.interests,
//         feedback: data.feedback,
//         challenges: data.challenges,
//         motivation: data.motivation,
//         level: data.level,
//       });

//       console.log("Registration successful");

//       // Optionally redirect or show success message here
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(handleRegister)}>
//       <div className="p-8">
//         <p className="pb-4 text-2xl font-medium">Fill your Profile</p>
//         <div className="grid gap-5 pt-2">
//           <InputField control={control} label="Name" name="name" />
//           <InputField control={control} label="Email" name="email" />

//           {/* Technical Skills */}
//           <Stack spacing={3}>
//             <Autocomplete
//               multiple
//               options={technicalSkillOptions}
//               getOptionLabel={(option) => option.label}
//               onChange={(event, value) => {
//                 setValue(
//                   "technicalskills",
//                   value.map((v) => v.id)
//                 );
//               }}
//               filterSelectedOptions
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Technical Skills"
//                   placeholder="Select skills"
//                 />
//               )}
//             />
//           </Stack>

//           {/* Soft Skills */}
//           <Stack spacing={3}>
//             <Autocomplete
//               multiple
//               options={softSkillOptions}
//               getOptionLabel={(option) => option.label}
//               onChange={(event, value) => {
//                 setValue(
//                   "softskills",
//                   value.map((v) => v.id)
//                 );
//               }}
//               filterSelectedOptions
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Soft Skills"
//                   placeholder="Select skills"
//                 />
//               )}
//             />
//           </Stack>

//           {/* Learning Goals */}
//           <InputField
//             control={control}
//             label="Short-Term Goals"
//             name="shorttermgoals"
//           />
//           <InputField
//             control={control}
//             label="Long-Term Goals"
//             name="longtermgoals"
//           />

//           {/* Time Commitment */}
//           <InputField
//             control={control}
//             label="Hours per Week for Learning"
//             name="hrsperweek"
//           />

//           {/* Subject Interests */}
//           <Stack spacing={3}>
//             <Autocomplete
//               multiple
//               options={interestsOptions}
//               getOptionLabel={(option) => option.label}
//               onChange={(event, value) => {
//                 setValue(
//                   "interests",
//                   value.map((v) => v.id)
//                 );
//               }}
//               filterSelectedOptions
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Subject Interests"
//                   placeholder="Select subjects"
//                 />
//               )}
//             />
//           </Stack>

//           {/* Feedback Style */}
//           <InputField
//             control={control}
//             label="Preferred Feedback Style (e.g., Peer Review)"
//             name="feedback"
//           />

//           {/* Current Challenges */}
//           <InputField
//             control={control}
//             label="Current Challenges in Learning"
//             name="challenges"
//           />

//           {/* Motivation Factors */}
//           <InputField
//             control={control}
//             label="Motivation for Learning (e.g., Career Advancement)"
//             name="motivation"
//           />

//           {/* Level Selection */}
//           <SelectInput
//             control={control}
//             options={levelOptions}
//             label="Level"
//             name="level"
//           />
//         </div>

//         {/* Submit Buttons */}
//         <div className="mt-10 flex justify-between w-full gap-5">
//           <Button variant="outlined" color="primary">
//             Cancel
//           </Button>

//           <Button
//             variant="contained"
//             color="primary"
//             type="submit"
//             disabled={isSubmitSuccessful || isPending}
//           >
//             Register
//           </Button>
//         </div>

//         {/* Error Handling */}
//         {error && <p className="text-red-500">{error.message}</p>}
//       </div>
//     </form>
//   );
// }

import { zodResolver } from "@hookform/resolvers/zod";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Interests, Levels, SoftSkills, TechSkills } from "../API";
import InputField from "../components/shared/InputField";
import SelectInput from "../components/shared/SelectInput";
import { useUpdateUserMutation } from "../hooks/users/useUpdateUserMutation";
import { useGetUserQuery } from "../hooks/users/useGetOneUserMutation";
import { useAuthContext } from "../providers/AuthProvider";
import { useEffect } from "react";

const ProfileUpdateSchema = z.object({
  id: z.string().min(1), // Ensure ID is required
  name: z.string().trim().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  technicalskills: z
    .array(z.nativeEnum(TechSkills))
    .min(1, "Please select at least one skill"),
  softskills: z
    .array(z.nativeEnum(SoftSkills))
    .min(1, "Please select at least one skill"),
  shorttermgoals: z.string().min(1, "Please specify your short-term goals"),
  longtermgoals: z.string().min(1, "Please specify your long-term goals"),
  interests: z
    .array(z.nativeEnum(Interests))
    .min(1, "Please select at least one interest"),
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

  console.log("lalalalalal", user)
  const { control, handleSubmit, setValue } = useForm<ProfileUpdateData>({
    resolver: zodResolver(ProfileUpdateSchema),
    defaultValues: {
      id: user?.id,
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

  const { userData } = useGetUserQuery(user?.id);
  const { mutate, isPending, error } = useUpdateUserMutation();

  // Populate form with existing user data
  useEffect(() => {
    if (userData) {
      const user = userData;
      setValue("name", user.name ?? "");
      setValue("email", user.email ?? "");
      setValue("technicalskills", (user.technicalskills ?? []).filter((skill): skill is TechSkills => skill !== null));
      setValue("softskills", (user.softskills ?? []).filter((skill): skill is SoftSkills => skill !== null));
      setValue("shorttermgoals", user.shorttermgoals ?? "");
      setValue("longtermgoals", user.longtermgoals ?? "");
      setValue("hrsperweek", user.hrsperweek ?? "");
      setValue("interests", (user.interests ?? []).filter((interest): interest is Interests => interest !== null));
      setValue("feedback", user.feedback ?? "");
      setValue("challenges", user.challenges ?? "");
      setValue("motivation", user.motivation ?? "");
      setValue("level", user.level ?? Levels.BEGINNER);
    }
  }, [userData]);

  async function handleUpdate(data: ProfileUpdateData) {
    try {
      await mutate(data);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error during profile update:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleUpdate)}>
      <div className="p-8">
        <p className="pb-4 text-2xl font-medium">Update Your Profile</p>
        <div className="grid gap-5 pt-2">
          <InputField control={control} label="Name" name="name" />
          <InputField control={control} label="Email" name="email" />
          {/* Technical Skills */}
          <Stack spacing={3}>
            <Autocomplete
              multiple
              options={technicalSkillOptions}
              getOptionLabel={(option) => option.label}
              onChange={(event, value) => {
                setValue(
                  "technicalskills",
                  value.map((v) => v.id)
                );
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
          </Stack>
          {/* Soft Skills */}
          <Stack spacing={3}>
            <Autocomplete
              multiple
              options={softSkillOptions}
              getOptionLabel={(option) => option.label}
              onChange={(event, value) => {
                setValue(
                  "softskills",
                  value.map((v) => v.id)
                );
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
            <Autocomplete
              multiple
              options={interestsOptions}
              getOptionLabel={(option) => option.label}
              onChange={(event, value) => {
                setValue(
                  "interests",
                  value.map((v) => v.id)
                );
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
  );
}

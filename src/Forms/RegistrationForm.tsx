import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../components/shared/InputField";
import SelectInput from "../components/shared/SelectInput";

import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

// Define the validation schema
const RegistrationFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  technicalSkills: z
    .array(z.string())
    .min(1, "Please select at least one technical skill"),
  softSkills: z
    .array(z.string())
    .min(1, "Please select at least one soft skill"),
  shortTermGoals: z.string().min(1, "Please specify your short-term goals"),
  longTermGoals: z.string().min(1, "Please specify your long-term goals"),
  learningPreferences: z.array(z.string()).optional(),
  timeCommitment: z.number().min(1, "Please specify hours per week"),
  subjectInterests: z.array(z.string()).optional(),
  feedbackStyle: z.string().optional(),
  challenges: z.string().optional(),
  motivationFactors: z.string().optional(),
  level: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof RegistrationFormSchema>;

const technicalSkillOptions = [
  { id: "JAVA", label: "Java" },
  { id: "PYTHON", label: "Python" },
  { id: "JAVASCRIPT", label: "JavaScript" },
];

const softSkillOptions = [
  { id: "COMMUNICATION", label: "Communication" },
  { id: "TEAMWORK", label: "Teamwork" },
  { id: "LEADERSHIP", label: "Leadership" },
];

const levelOptions = [
  { id: "BEGINNER", label: "Beginner" },
  { id: "INTERMEDIATE", label: "Intermediate" },
  { id: "ADVANCED", label: "Advanced" },
];

export default function RegistrationForm() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitSuccessful },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      technicalSkills: [],
      softSkills: [],
      shortTermGoals: "",
      longTermGoals: "",
      learningPreferences: [],
      timeCommitment: 1,
      subjectInterests: [],
      feedbackStyle: "",
      challenges: "",
      motivationFactors: "",
    },
  });

  function handleRegister(data: RegistrationFormData) {
    console.log("Registration Data:", data);
    // Handle registration logic here (e.g., API call)
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className="p-8">
        <p className="pb-4 text-2xl font-medium">Register</p>
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
                  "technicalSkills",
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
                  "softSkills",
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
            name="shortTermGoals"
          />
          <InputField
            control={control}
            label="Long-Term Goals"
            name="longTermGoals"
          />

          {/* Time Commitment */}
          <InputField
            control={control}
            type="number"
            label="Hours per Week for Learning"
            name="timeCommitment"
          />

          {/* Subject Interests */}
          <Stack spacing={3}>
            <Autocomplete
              multiple
              options={[
                { id: "DATA_SCIENCE", label: "Data Science" },
                { id: "WEB_DEVELOPMENT", label: "Web Development" },
                { id: "MACHINE_LEARNING", label: "Machine Learning" },
              ]}
              getOptionLabel={(option) => option.label}
              onChange={(event, value) => {
                setValue(
                  "subjectInterests",
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
            name="feedbackStyle"
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
            name="motivationFactors"
          />

          {/* Level Selection */}
          <SelectInput
            control={control}
            options={levelOptions}
            label="Level"
            name="level"
          />
        </div>
        <div className="mt-10 flex justify-end gap-5">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              // Handle cancel action here if needed
              console.log("Cancelled");
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitSuccessful}
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
}

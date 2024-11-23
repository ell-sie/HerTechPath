import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Levels } from "../API";
import InputField from "../components/shared/InputField";
import SelectInput from "../components/shared/SelectInput";
import { Paths, UpdatePathData } from "../pages/PathsPage";

const AddEditPathFormSchema = z.object({
  id: z.string().min(1).optional(),
  name: z.string().trim().min(1, "Please enter a valid Path name"),
  userpathID: z.string().min(1, "Please select a user path"),
  level: z.nativeEnum(Levels).optional(),
  description: z.string().min(5, "Path description is too short"),
  isUpdate: z.boolean(),
});

const levelOptions = [
  { id: Levels.BEGINNER, label: "Beginner" },
  { id: Levels.INTERMEDIATE, label: "Intermediate" },
  { id: Levels.ADVANCED, label: "Advanced" },
];

type AddEditPathFormData = z.infer<typeof AddEditPathFormSchema>;
export interface AddPathFormProps {
  isOpen: boolean;
  onOpenClick: () => void;
  onCloseClick: () => void;
  isUpdate: boolean;
  defaultPathValue: Paths;
  handlers: {
    handleAddPath: (data: Paths) => void;
    handleEditPath: (data: UpdatePathData) => void;
  };
}

export default function AddEditPathForm({
  isUpdate,
  onCloseClick,
  handlers,
  defaultPathValue: defaultPathValue,
}: AddPathFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<AddEditPathFormData>({
    resolver: zodResolver(AddEditPathFormSchema),
    defaultValues: {
      id: defaultPathValue.id ?? undefined,
      name: defaultPathValue.name,
      userpathID: defaultPathValue.userpathID,
      level: defaultPathValue.level ?? undefined,
      description: defaultPathValue.description,
      isUpdate,
    },
  });

  function handleSavePath(data: AddEditPathFormData) {
    if (isUpdate && data.id) {
      handlers.handleEditPath(data as UpdatePathData);
    } else {
      handlers.handleAddPath(data as Paths);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSavePath)}>
      <div className="p-8">
        <p className="pb-4 text-2xl font-medium">
          {isUpdate ? "Edit Path" : "Add Path"}
        </p>
        <div>
          {!isUpdate && (
            <p className="pb-5 text-primary-400">
              Add a Path so that you can track your progress.
            </p>
          )}
          <div className="grid gap-5 pt-2">
            <InputField control={control} label="Path" name="name" />
            <InputField
              control={control}
              label="Description"
              name="description"
              multiline
              maxRows={3}
            />
            <InputField control={control} label="User Path" name="userpathID" />
            <SelectInput
              control={control}
              label="Level"
              name="level"
              options={levelOptions}
            />
          </div>
        </div>
        <div className="mt-10 flex justify-end gap-5">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              onCloseClick();
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
            {isUpdate ? "Edit Path" : "Add Path"}
          </Button>
        </div>
      </div>
    </form>
  );
}

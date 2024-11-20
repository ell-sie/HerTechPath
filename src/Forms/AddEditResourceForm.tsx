/* eslint-disable @typescript-eslint/no-unused-expressions */
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Level } from "../API";
import InputField from "../components/shared/InputField";
import SelectInput from "../components/shared/SelectInput";
// import { usePathsQuery } from "../hooks/path/usePathsQuery";
import { Resource, UpdateResource } from "../pages/ResourcePage";
import AutoCompleteTextInput from "../components/shared/AutocompleteTextInput";

const AddEditResourceFormSchema = z.object({
  id: z.string().min(1).optional(),
  title: z.string().trim().min(1, "Please enter a valid Resource title"),
  pathID: z.string().min(1, "Please select a path"),
  link: z.string().url().optional().nullable(),
  level: z.nativeEnum(Level),
  description: z.string().min(5, "Resource description is too short"),
  isUpdate: z.boolean(),
});

type AddEditResourceFormData = z.infer<typeof AddEditResourceFormSchema>;
export interface AddResourceFormProps {
  isOpen: boolean;
  onOpenClick: () => void;
  onCloseClick: () => void;
  isUpdate: boolean;
  defaultResourceValue: Resource;
  handlers: {
    handleAddResource: (data: Resource) => void;
    handleEditResource: (data: UpdateResource) => void;
  };
}

const levelOptions = [
  {id: "BEGINNER", label: Level.BEGINNER },
  { id: "INTERMEDIATE", label: Level.INTERMEDIATE },
  { id: "ADVANCED", label: Level.ADVANCED },
];

export default function AddEditResourceForm({
  isUpdate,
  onCloseClick,
  handlers,
  defaultResourceValue,
}: AddResourceFormProps) {
  // const { data: paths } = usePathsQuery();
const paths = [
  {
    id: "1",
    name: "Path 1",
  },
  {
    id: "2",
    name: "Path 2",
  },
  {
    id: "3",
    name: "Path 3",
  },];
  const {
    control,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<AddEditResourceFormData>({
    resolver: zodResolver(AddEditResourceFormSchema),
    defaultValues: {
      id: defaultResourceValue.id,
      title: defaultResourceValue.title,
      pathID: defaultResourceValue.pathID,
      link: defaultResourceValue.link,
      level: defaultResourceValue.level,
      description: defaultResourceValue.description,
      isUpdate,
    },
  });
  
  function handleSaveResource(data: AddEditResourceFormData) {
    if (isUpdate && data.id) {
      handlers.handleEditResource(data as UpdateResource);
    } else {
      handlers.handleAddResource(data as Resource);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSaveResource)}>
      <div className="p-8">
        <p className="pb-4 text-2xl font-medium">
          {isUpdate ? "Edit Resource" : "Add Resource"}
        </p>
        <div>
          {!isUpdate && (
            <p className="pb-5 text-primary-400">
              Add a Resource so that you can track your progress.
            </p>
          )}
          <div className="grid gap-5 pt-2">
            <InputField control={control} label="Resource" name="title" />
            <InputField
              control={control}
              label="Description"
              name="description"
              multiline
              maxRows={3}
            />
            <InputField control={control} label="Link" name="link" />
            <SelectInput
              control={control}
              options={levelOptions}
              label="Level"
              name="level"
            />
              <AutoCompleteTextInput
              label="Path"
              name="pathID"
              control={control}
              options={paths.map((client: { id: string; name: string | null | undefined }) => ({
                label: client.name ?? "Unknown",
                value: client.id,
              }))}
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
            {isUpdate ? "Edit Resource" : "Add Resource"}
          </Button>
        </div>
      </div>
    </form>
  );
}
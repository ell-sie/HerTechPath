import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../components/shared/InputField";
import { Resource, UpdateResource } from "../pages/ResourcePage";

const AddEditResourceFormSchema = z.object({
  id: z.string().min(1).optional(),
  title: z.string().trim().min(1, "Please enter a valid Resource title"),
  link: z.string().url().optional().nullable(),
  description: z.string().min(5, "Resource description is too short"),
  author: z.string().min(1, "Please enter the author of the resource"),
  hours: z.number().min(1, "Please enter the number of hours the resource will take"),
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

export default function AddEditResourceForm({
  isUpdate,
  onCloseClick,
  handlers,
  defaultResourceValue,
}: AddResourceFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<AddEditResourceFormData>({
    resolver: zodResolver(AddEditResourceFormSchema),
    defaultValues: {
      id: defaultResourceValue.id,
      title: defaultResourceValue.title,
      link: defaultResourceValue.link,
      description: defaultResourceValue.description,
      author: defaultResourceValue.author,
      hours: defaultResourceValue.hours,
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

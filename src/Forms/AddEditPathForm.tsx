import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Status } from "../API";
import InputField from "../components/shared/InputField";
import SelectInput from "../components/shared/SelectInput";
import Button from "../components/shared/SharedButton";
import { CreatePathData, Paths, UpdatePathData } from "../pages/PathsPage";

interface AddEditPathFormProps {
  defaultPathData: Paths;
  handlers: {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    handleAddPath: (data: CreatePathData & { id: string }) => void;
    handleUpdatePath: (data: UpdatePathData) => void;
  };
  isUpdate: boolean;
}

const AddEditPathFormSchema = z.object({
  id: z.string().nullable(),
  name: z.string().min(1, { message: "Please provide path name" }),
  status: z.nativeEnum(Status).nullable(),
  userID: z.string(),
  isUpdate: z.boolean(),
});

type NewPathFormData = z.infer<typeof AddEditPathFormSchema>;

const statusOptions = [
  { id: Status.STARTED, label: "Started" },
  { id: Status.INPROGRESS, label: "In Progress" },
  { id: Status.DONE, label: "Done" },
];

export default function AddEditPathForm({
  defaultPathData,
  handlers,
  isUpdate,
}: AddEditPathFormProps) {
  const temporaryId = useId();
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm<NewPathFormData>({
    resolver: zodResolver(AddEditPathFormSchema),
    defaultValues: {
      id: defaultPathData.id,
      name: defaultPathData.name,
      status: defaultPathData.status,
      isUpdate,
    },
  });

  const onSubmitForm = (pathData: Paths) => {
    if (isUpdate && defaultPathData?.id) {
      handlers.handleUpdatePath({ ...pathData, id: defaultPathData.id });
    } else {
      handlers.handleAddPath({ ...pathData, id: temporaryId });
    }
  };

  return (
    <form
      className="grid w-full max-w-screen-sm gap-4 rounded-xl p-5 font-medium text-secondary-800"
      method="post"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <span>{isUpdate ? "Edit Client Information" : "Add Client"}</span>
      <InputField
        label="Path name"
        control={control}
        name="name"
        size="small"
      />
      <InputField label="User" control={control} name="userID" size="small" />
      <div className="grid grid-cols-2 gap-4">
        <SelectInput
          control={control}
          options={statusOptions}
          label="Status"
          name="status"
        />
      </div>
      <div className="mt-3 flex w-full justify-end gap-8 px-5 text-sm font-medium text-white">
        <Button variant="outlined" onClick={() => handlers.setShowModal(false)}>
          Cancel
        </Button>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disabled={(!isValid && isSubmitted) || isSubmitSuccessful}
          isLoading={isSubmitting}
        >
          {isUpdate ? "Edit CLient" : "Add Client"}
        </Button>
      </div>
    </form>
  );
}

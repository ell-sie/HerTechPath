import { zodResolver } from "@hookform/resolvers/zod";
import { GraphQLResult } from "aws-amplify/api";
import { Dispatch, SetStateAction, useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {type Paths, type ListPathsQuery} from "../API";
import PATHS_QUERY_KEY from "../constants/queryKeys";
import QueryClient from "../context/QueryClient";
import {
  Path,
  CreatePathData,
  UpdatePathData,
} from "../../pages/PathsPage";
import Button from "../components/shared/SharedButton";
import InputField from "../components/shared/InputField";

interface AddEditPathFormProps {
  defaultPathData: Path;
  handlers: {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    handleAddClient: (data: CreatePathData & { id: string }) => void;
    handleUpdateClient: (data: UpdatePathData) => void;
  };
  isUpdate: boolean;
}


const AddEditPathFormSchema = z
  .object({
    id: z.string().nullable(),
    name: z.string().min(1, { message: "Please provide path name" }),
  })
  .refine(
    ({ name, isUpdate, id }) => {
      const cachedClients = QueryClient.getQueryData<
        GraphQLResult<ListClientsQuery>
      >(CLIENTS_QUERY_KEY)?.data.listClients?.items as Clients[];

      if (isUpdate && id) {
        const isNameUnchangedOrUnique = cachedClients.every(
          (client) =>
            client.id === id || client.name.toLowerCase() !== name.toLowerCase()
        );

        return isNameUnchangedOrUnique;
      }

      return !isValueInObjectArray(cachedClients, "name", name);
    },
    { path: ["name"], message: "Client name already exists" }
  );

type NewPathFormData = z.infer<typeof AddEditPathFormSchema>;

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
      id: defaultClientData.id,
      name: defaultClientData.name,
      contactPerson: defaultClientData.contactPerson,
      email: defaultClientData.email,
      clientSince: dayjs(defaultClientData.clientSince),
      description: defaultClientData.description,
      taxNumber: defaultClientData.taxNumber,
      country: defaultClientData.country,
      state: defaultClientData.state,
      city: defaultClientData.city,
      address: defaultClientData.address,
      zipCode: defaultClientData.zipCode,
      isUpdate,
    },
  });

  const onSubmitForm = (clientData: CreateClientData) => {
    isUpdate && defaultClientData?.id
      ? handlers.handleUpdateClient({ ...clientData, id: defaultClientData.id })
      : handlers.handleAddClient({ ...clientData, id: temporaryId });
  };

  return (
    <form
      className="grid w-full max-w-screen-sm gap-4 rounded-xl p-5 font-medium text-secondary-800"
      method="post"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <span>{isUpdate ? "Edit Client Information" : "Add Client"}</span>
      <InputField
        label="Client name"
        control={control}
        name="name"
        size="small"
      />
      <InputField
        label="Contact person"
        control={control}
        name="contactPerson"
        size="small"
      />
      <InputField
        label="Email"
        type="email"
        control={control}
        name="email"
        size="small"
      />
      <DatePicker
        label="Client Since"
        name="clientSince"
        control={control}
        size="small"
        clearable
      />
      <InputField
        label="Description"
        control={control}
        name="description"
        size="small"
      />
      <InputField
        label="Tax Number"
        control={control}
        name="taxNumber"
        size="small"
      />
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Country"
          control={control}
          name="country"
          size="small"
        />
        <InputField label="State" control={control} name="state" size="small" />
        <InputField label="City" control={control} name="city" size="small" />
        <InputField
          label="Address"
          control={control}
          name="address"
          size="small"
        />
      </div>
      <InputField
        label="Zip Code"
        control={control}
        name="zipCode"
        size="small"
      />
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

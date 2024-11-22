import { MenuItem } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import AddIcon from "../assets/AddIcon";
import EditIcon from "../assets/EditIcon";
import DeleteOption from "../components/DeleteOptions";
import MenuOption from "../components/shared/MenuOption";
import Button from "../components/shared/SharedButton";
import SharedModal from "../components/shared/SharedModal";
import AddEditResourceForm from "../Forms/AddEditResourceForm";
import {
  useAddResourceMutation,
  useDeleteResourceMutation,
  useResourcesQuery,
  useUpdateResourceMutation,
} from "../hooks/resources";
import MenuAnchorElementProvider from "../providers/MenuAnchorElementProvider";

export interface Resource {
  id?: string | undefined;
  title: string;
  description: string;
  link: string | null;
  pathID: string;
}

export interface UpdateResource extends Resource {
  id: string;
}

const initialAddResourceData = {
  title: "",
  description: "",
  link: "",
  pathID: "",
};
function columns({
  handleEditClick,
  handleDeleteResource: handleDeleteResource,
}: {
  handleEditClick: (data: Resource) => void;
  handleDeleteResource: (data: { id: string }) => void;
}): GridColDef[] {
  return [
    {
      field: "title",
      headerName: "Resource Title",
      minWidth: 200,
      flex: 2,
      cellClassName: "font-bold",
      renderCell: ({ row }) => (
        <div className="flex items-center">{row.title}</div>
      ),
    },
    { field: "path", headerName: "Path", width: 200 },
    { field: "link", headerName: "Link", width: 200 },
    { field: "createdAt" },
    { field: "description", headerName: "Description", minWidth: 100, flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      type: "actions",
      renderCell: ({ row }) => (
        <MenuAnchorElementProvider>
          <MenuOption>
            <MenuItem
              onClick={() => handleEditClick(row)}
              className="flex gap-2"
            >
              <EditIcon className="size-5" />
              Edit
            </MenuItem>
            <DeleteOption
              handleDelete={handleDeleteResource}
              payload={{
                id: row.id,
              }}
              alertText={`Are you sure you want to delete ${row.name} resource ?`}
            />
          </MenuOption>
        </MenuAnchorElementProvider>
      ),
    },
  ] as const;
}

function ResourcesPage() {
  const [defaultResourceValue, setDefaultResourceValue] = useState<Resource>(
    initialAddResourceData
  );
  const [openModal, setOpenModal] = useState(false);

  const [isUpdate, setIsUpdate] = useState(false);
  const { isPending, data: resources } = useResourcesQuery();
  const addResource = useAddResourceMutation();
  const updateResource = useUpdateResourceMutation();
  const deleteResource = useDeleteResourceMutation();
  console.log(resources);
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleEditClick = (row: Resource) => {
    setIsUpdate(true);
    setDefaultResourceValue({
      id: row.id,
      title: row.title,
      description: row.description,
      link: row.link,
      pathID: row.pathID,
    });
    setOpenModal(true);
  };

  const handleClose = () => {
    setIsUpdate(false);
    setOpenModal(false);
  };

  const handleAddResource = (data: Resource) => {
    addResource.mutate({
      ...data,
    });
    setOpenModal(false);
  };

  const handleEditResource = (data: UpdateResource) => {
    updateResource.mutate({
      ...data,
    });
    setIsUpdate(false);
    setOpenModal(false);
  };

  const handleDeleteResource = (data: { id: string }) => {
    // resources.find((resource) => resource.id === data.id);

    deleteResource.mutate({ id: data.id });
  };

  return (
    <div className="flex h-custom-full-screen flex-col gap-6 px-4">
      <div className="flex items-center justify-between rounded-b-2xl bg-white p-6 shadow-md shadow-black/15">
        <h2 className="text-xl font-semibold text-secondary-800">Resources</h2>
        <span>
          <Button
            onClick={() => {
              setIsUpdate(false);
              setDefaultResourceValue({ ...initialAddResourceData });
              handleClickOpen();
            }}
            variant="contained"
            color="primary"
            className="flex gap-2"
          >
            <AddIcon className="size-6" />
            Add Resource
          </Button>
        </span>
      </div>
      <DataGrid
        className={"h-fit bg-white"}
        sx={{
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
        }}
        rows={resources}
        columns={columns({ handleEditClick, handleDeleteResource })}
        loading={
          isPending ||
          addResource.isPending ||
          updateResource.isPending ||
          deleteResource.isPending
        }
        initialState={{
          sorting: {
            sortModel: [{ field: "createdAt", sort: "desc" }],
          },
        }}
        columnVisibilityModel={{
          createdAt: false,
        }}
      />
      <SharedModal openModal={openModal} setOpenModal={setOpenModal}>
        <AddEditResourceForm
          defaultResourceValue={defaultResourceValue}
          isUpdate={isUpdate}
          isOpen={openModal}
          onOpenClick={handleClickOpen}
          onCloseClick={handleClose}
          handlers={{ handleAddResource, handleEditResource }}
        />
      </SharedModal>
    </div>
  );
}

export default ResourcesPage;

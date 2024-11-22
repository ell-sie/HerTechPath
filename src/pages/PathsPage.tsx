import { MenuItem } from "@mui/material";
import {
  DataGrid,
  GridRenderCellParams,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { DeletePathInput, Path, Status } from "../API";
import AddIcon from "../assets/AddIcon";
import EditIcon from "../assets/EditIcon";
import DeleteOption from "../components/DeleteOptions";
import SearchInput from "../components/SearchInput";
import MenuOption from "../components/shared/MenuOption";
import PathCard from "../components/shared/PathCard";
import PathCardSkeleton from "../components/shared/PathCardSkeleton";
import SharedModal from "../components/shared/SharedModal";
import { ViewSwitcher } from "../components/shared/ViewSwitcher";
import {
  useAddPathMutation,
  useDeletePathMutation,
  usePathsQuery,
  useUpdatePathMutation,
} from "../hooks/path";
// import withAdminPermission from "../hooks/withAdminPermission";
import AddEditPathForm from "../Forms/AddEditPathForm";
import MenuAnchorElementProvider from "../providers/MenuAnchorElementProvider";
import ErrorPage from "./ErrorPage";

export interface Paths {
  id: string | null;
  name: string;
  status?: Status | null;
  userID: string;
}
export type CreatePathData = Omit<Paths, "id">;
export interface UpdatePathData extends Paths {
  id: string;
}

interface TableViewProps {
  isPending: boolean;
  paths: Path[];
  columnsProps: ColumnsProps;
}

interface TilesViewProps {
  isPending: boolean;
  filteredPaths: Path[];
  deletingPath: DeletePathInput | null;
  handleDeletePath: (data: DeletePathInput) => void;
  changeDefaultPath: (pathId: string) => void;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  setsearchInput: Dispatch<SetStateAction<string>>;
}

interface ColumnsProps {
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  changeDefaultClient: (pathId: string) => void;
  handleDeleteClient: (data: DeletePathInput) => void;
}

const initialAddPathData = {
  id: null,
  name: "",
  status: Status.STARTED,
  userID: "",
};

function columns({
  setIsUpdate,
  changeDefaultClient,
  handleDeleteClient,
}: ColumnsProps) {
  return [
    {
      field: "name",
      headerName: "Path Name",
      cellClassName: "font-bold",
      minWidth: 100,
    },
    { field: "status", headerName: "Status", minWidth: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 70,
      renderCell: ({ row }: GridRenderCellParams) => (
        <MenuAnchorElementProvider>
          <MenuOption>
            <MenuItem
              onClick={() => {
                setIsUpdate(true);
                changeDefaultClient(row.id);
              }}
              className="flex gap-2"
            >
              <EditIcon className="size-5" />
              Edit
            </MenuItem>
            <DeleteOption
              handleDelete={handleDeleteClient}
              payload={{
                id: row.id,
              }}
              alertText={`Are you sure you want to delete ${row.name} resource ?`}
            />
          </MenuOption>
        </MenuAnchorElementProvider>
      ),
    },
  ];
}

function tableView({
  isPending,
  paths: clients,
  columnsProps,
}: TableViewProps) {
  return (
    <DataGrid
      style={{
        height: "80vh",
      }}
      slots={{
        toolbar: () => (
          <GridToolbarContainer
            sx={{
              padding: 4,
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
            }}
          >
            <GridToolbarFilterButton />
          </GridToolbarContainer>
        ),
      }}
      className="bg-white"
      loading={isPending}
      columns={columns(columnsProps)}
      rows={clients ?? []}
    />
  );
}

function tilesView({
  isPending,
  filteredPaths: filteredPaths,
  handleDeletePath: handleDeleteClient,
  changeDefaultPath: changeDefaultClient,
  setIsUpdate,
  setsearchInput,
  deletingPath,
}: TilesViewProps) {
  return (
    <>
      <div className="px-16">
        <div className="my-10 flex items-center justify-center">
          <SearchInput
            placeHolder="Search for Client"
            onChange={(e) => setsearchInput(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        {isPending
          ? Array.from(Array(4), (_element, index) => (
              <PathCardSkeleton key={index} />
            ))
          : filteredPaths?.map((path) => (
              <PathCard
                key={path.id || path.createdAt}
                {...path}
                handlers={{
                  handleDelete: handleDeleteClient,
                  handleSetDefaultClient: changeDefaultClient,
                  handleSetUpdate: setIsUpdate,
                }}
                deletingPath={deletingPath}
              />
            ))}
      </div>
    </>
  );
}

function PathsPage() {
  const { data: pathway, isPending, error } = usePathsQuery();
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const [defaultPath, setDefaultPath] = useState<Paths>(initialAddPathData);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isInTableView, setIsInTableView] = useState(true);
  const addPath = useAddPathMutation();
  const deletePath = useDeletePathMutation();
  const updatePath = useUpdatePathMutation();

  const changeDefaultPath = (pathId: string) => {
    setDefaultPath(() => {
      const path =
        pathway?.find(({ id }) => pathId === id) || initialAddPathData;
      return { ...path };
    });
    setShowModal(true);
  };

  const filteredClients = pathway?.filter((client) =>
    client?.name?.toLowerCase().includes(searchInput.toLocaleLowerCase())
  );

  const handleAddClient = useCallback(
    (data: CreatePathData) => {
      addPath.mutate({
        ...data,
      });
      setShowModal(false);
    },
    [addPath]
  );

  const handleUpdatePath = useCallback(
    (data: UpdatePathData) => {
      updatePath.mutate({
        ...data,
      });
      setShowModal(false);
    },
    [updatePath]
  );

  const handleDeletePath = useCallback(
    (data: DeletePathInput) => {
      const pathToDelete = pathway?.find((path) => path.id === data.id);

      if (!(pathToDelete && pathToDelete.Resources)) return;

      if (pathToDelete?.Resources?.items?.length > 0)
        return toast.error("Can not delete a client who has resources");

      deletePath.mutate(data);
    },
    [deletePath, pathway]
  );

  if (error) return <ErrorPage />;

  return (
    <div className="h-custom-full-screen overflow-y-scroll px-4 pb-5">
      <div className="flex items-center justify-between rounded-b-2xl bg-black p-6 shadow-md shadow-white15">
        <h2 className="text-2xl font-semibold text-secondary-800">Path</h2>
        <button
          className="flex gap-2 rounded-lg bg-secondary-800 px-3 py-2 font-medium text-black"
          onClick={() => {
            setDefaultPath(initialAddPathData);
            setShowModal(true);
          }}
        >
          <AddIcon className="size-6" />
          <span>New Path</span>
        </button>
      </div>
      <div className="relative my-10">
        <div className="absolute -right-2 top-0 z-10">
          <ViewSwitcher
            isInTabelView={isInTableView}
            handleViewSwitcher={(inTableReview) =>
              setIsInTableView(inTableReview)
            }
          />
        </div>
        {isInTableView
          ? tableView({
              isPending: isPending || addPath.isPending || updatePath.isPending,
              paths: pathway || [],
              columnsProps: {
                setIsUpdate,
                changeDefaultClient: changeDefaultPath,
                handleDeleteClient: handleDeletePath,
              },
            })
          : tilesView({
              isPending: isPending,
              filteredPaths: filteredClients,
              handleDeletePath: handleDeletePath,
              changeDefaultPath: changeDefaultPath,
              setIsUpdate,
              setsearchInput,
              deletingPath: deletePath.deletingPath,
            })}
      </div>
      <SharedModal openModal={showModal} setOpenModal={setShowModal}>
        <AddEditPathForm
          defaultPathData={defaultPath}
          handlers={{
            setShowModal,
            handleAddPath: handleAddClient,
            handleUpdatePath: handleUpdatePath,
          }}
          isUpdate={isUpdate}
        />
      </SharedModal>
    </div>
  );
}

export default PathsPage;

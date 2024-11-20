import { MenuItem } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "../assets/DeleteIcon";
import { useMenuAnchorElementContext } from "../providers/MenuAnchorElementProvider";
import Button from "./shared/SharedButton";
import SharedModal from "./shared/SharedModal";
import { MenuAnchorElementActionTypes } from "../reducers/MenuAnchorElementReducer";

interface Payload {
  id: string;
}
interface DeleteOptionProps<T extends Payload> {
  handleDelete: (data: T) => void;
  alertText?: string;
  payload: T;
}

export default function DeleteOption<T extends Payload>({
  handleDelete,
  alertText = "Are you sure you want to proceed?",
  payload,
}: DeleteOptionProps<T>) {
  const [openModal, setOpenModal] = useState(false);
  const { setAnchorEl } = useMenuAnchorElementContext();

  return (
    <>
      <SharedModal openModal={openModal} setOpenModal={setOpenModal}>
        <div className="grid w-full gap-5 p-5">
          <span>{alertText}</span>
          <div className="flex w-full justify-end gap-5">
            <Button
              onClick={() => setOpenModal(false)}
              className=" w-fit"
              color="primary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (payload.id) handleDelete(payload);
                setOpenModal(false);
                setAnchorEl?.({
                  type: MenuAnchorElementActionTypes.HIDE,
                  payload: null,
                });
              }}
              color="error"
              variant="outlined"
            >
              Delete
            </Button>
          </div>
        </div>
      </SharedModal>
      <MenuItem
        onClick={() => setOpenModal(true)}
        sx={{
          color: "#ff0f00",
        }}
        className="flex gap-2"
      >
        <DeleteIcon className="size-5" />
        Delete
      </MenuItem>
    </>
  );
}

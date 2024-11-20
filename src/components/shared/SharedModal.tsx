import { Dialog } from "@mui/material";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";

interface AddEditTimeEntryModalProps {
  childrenBackground?: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function SharedModal({
  openModal,
  setOpenModal,
  children,
}: PropsWithChildren<AddEditTimeEntryModalProps>) {
  return (
    <Dialog
      open={openModal}
      onClose={() => setOpenModal(false)}
      fullWidth
      closeAfterTransition={false}
    >
      {children}
    </Dialog>
  );
}

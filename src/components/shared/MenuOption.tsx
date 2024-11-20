import { IconButton, Menu } from "@mui/material";
import { PropsWithChildren } from "react";
import MenuDotsIcon from "../../assets/MenuDotsIcon";
import { useMenuAnchorElementContext } from "../../providers/MenuAnchorElementProvider";
import { MenuAnchorElementActionTypes } from "../../reducers/MenuAnchorElementReducer";

export default function MenuOption({ children }: PropsWithChildren) {
  const { anchorEl, setAnchorEl } = useMenuAnchorElementContext();

  return (
    <>
      <IconButton
        onClick={(e) =>
          setAnchorEl({
            type: MenuAnchorElementActionTypes.UNHIDE,
            payload: e.currentTarget,
          })
        }
        sx={{
          padding: "5px",
          "&:hover": {
            padding: "5px",
          },
        }}
      >
        <MenuDotsIcon className="size-6" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() =>
          setAnchorEl({
            type: MenuAnchorElementActionTypes.HIDE,
            payload: null,
          })
        }
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            minWidth: "100px",
          },
        }}
      >
        {children}
      </Menu>
    </>
  );
}

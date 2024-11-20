import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import menuAnchorElementReducer, {
  initialMenuAnchorElement,
  MenuAnchorElementAction,
  MenuAnchorElementType,
} from "../reducers/MenuAnchorElementReducer";

interface MenuAnchorElementContextType {
  anchorEl: MenuAnchorElementType;
  setAnchorEl: Dispatch<MenuAnchorElementAction>;
}

export const MenuAnchorElementContext =
  createContext<MenuAnchorElementContextType>({
    anchorEl: initialMenuAnchorElement,
    setAnchorEl: () => {},
  });

export function useMenuAnchorElementContext() {
  return useContext(MenuAnchorElementContext);
}

export default function MenuAnchorElementProvider({
  children,
}: PropsWithChildren) {
  const [anchorEl, setAnchorEl] = useReducer(menuAnchorElementReducer, null);

  return (
    <MenuAnchorElementContext.Provider value={{ anchorEl, setAnchorEl }}>
      {children}
    </MenuAnchorElementContext.Provider>
  );
}

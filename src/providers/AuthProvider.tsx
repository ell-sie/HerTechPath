import { Dispatch, createContext, useContext, useReducer } from "react";
import authReducer, {
  AuthActionTypes,
  AuthState,
  initialUserState,
} from "../reducers/authReducer";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextType {
  user: AuthState;
  dispatch: Dispatch<AuthActionTypes>;
}

export const AuthContext = createContext<AuthContextType>({
  user: initialUserState,
  dispatch: () => {},
});

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, dispatch] = useReducer(authReducer, initialUserState);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

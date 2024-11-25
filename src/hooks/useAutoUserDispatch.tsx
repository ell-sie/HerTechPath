import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { useEffect } from "react";
import { useAuthContext } from "../providers/AuthProvider";
import { Actions } from "../reducers/authReducer";

export default function useAutoUserDispatch() {
  const { dispatch } = useAuthContext();

  useEffect(() => {
    async function getUserAndAttributes() {
      try {
        const [user, session] = await Promise.all([
          getCurrentUser(),
          fetchAuthSession(),
        ]);

        dispatch({
          type: Actions.SET_USER_DATA,
          payload: {
            id: user.userId,
            email: user?.signInDetails?.loginId,
            name: session.tokens?.idToken?.payload?.name as string,
          },
        });
      } catch (_error) {
        console.error(_error);
        dispatch({ type: Actions.LOGOUT });
      }
    }

    getUserAndAttributes();
  }, [dispatch]);

  return null;
}

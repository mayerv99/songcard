import { useContext } from "react";

import { AuthenticationContext } from "../AuthenticationContext";

export default function useCurrentUser() {
  const { currentUser, setCurrentUser } = useContext(AuthenticationContext);
  return { currentUser, setCurrentUser };
}

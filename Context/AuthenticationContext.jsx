import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  return (
    <AuthenticationContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

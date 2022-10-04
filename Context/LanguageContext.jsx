import { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

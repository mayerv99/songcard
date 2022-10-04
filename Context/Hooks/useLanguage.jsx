import { useContext } from "react";

import { LanguageContext } from "../LanguageContext";

export default function useLanguage() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  return { selectedLanguage, setSelectedLanguage };
}

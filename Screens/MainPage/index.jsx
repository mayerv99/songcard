import { Text, SafeAreaView } from "react-native";
import React, { useState } from "react";

import useLanguage from "../../Context/Hooks/useLanguage";

const MainPage = () => {
  const { selectedLanguage } = useLanguage();

  const [isSearchingOpen, setIsSearchingOpen] = useState(false);

  return (
    <SafeAreaView>
      <Text>{selectedLanguage.label}</Text>
    </SafeAreaView>
  );
};

export default MainPage;

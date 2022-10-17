import { SafeAreaView, Text } from "react-native";
import React from "react";

import AppName from "../../Components/AppName";

import { LanguageItem, Title, Wrapper } from "./styled";

//LanguagesArray
import { languages } from "./languageList";

//Context
import useLanguage from "../../Context/Hooks/useLanguage";

const LanguagePage = (props) => {
  const { setSelectedLanguage } = useLanguage();

  const handleSelectLanguage = (selected) => {
    setSelectedLanguage(selected);
    props.navigation.navigate("appBarRoutes");
  };

  return (
    <SafeAreaView>
      <AppName fontSize={32} />
      <Title>Selecione o idioma que deseja aprender</Title>
      <Wrapper>
        {languages.map((language, index) => (
          <LanguageItem
            key={language.value}
            onPress={() => handleSelectLanguage(language)}
          >
            <Text>{language.label}</Text>
            <Text>&#8594;</Text>
          </LanguageItem>
        ))}
      </Wrapper>
    </SafeAreaView>
  );
};

export default LanguagePage;

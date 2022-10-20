import { Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";

import useLanguage from "../../Context/Hooks/useLanguage";
import useCurrentUser from "../../Context/Hooks/useCurrentUser";

import { Header, SelectLanguage, SectionTitle } from "./styled";

import MusicCard from "../../Components/MusicCard";

import { musics } from "./musicsArray";
import { languages } from "../LanguagePage/languageList";

const MainPage = (props) => {
  const { setSelectedLanguage, selectedLanguage } = useLanguage();
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    const usersDefaultLanguage = languages.filter(
      (language) => language?.alias === currentUser?.locale
    );
    setSelectedLanguage(usersDefaultLanguage[0]);
  }, [currentUser]);

  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
      <Header>
        <SectionTitle>Minhas músicas</SectionTitle>
        <SelectLanguage
        // onPress={() => props.navigation.navigate("languagePage")}
        >
          <Text>{selectedLanguage?.label}</Text>
        </SelectLanguage>
      </Header>
      {musics.map((music) => (
        <MusicCard music={music} />
      ))}
    </SafeAreaView>
  );
};

export default MainPage;

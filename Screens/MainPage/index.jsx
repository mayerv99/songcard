import { Text, SafeAreaView } from "react-native";
import React, { useState } from "react";

import useLanguage from "../../Context/Hooks/useLanguage";

import { Header, SelectLanguage, SectionTitle } from "./styled";

import MusicCard from "../../Components/MusicCard";

import { musics } from "./musicsArray";

const MainPage = (props) => {
  const { selectedLanguage } = useLanguage();

  // const [isSearchingOpen, setIsSearchingOpen] = useState(false);

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

import { ScrollView, Text, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import useReadFirebase from "../../Context/Hooks/useReadFirebase";

import useLanguage from "../../Context/Hooks/useLanguage";
import useCurrentUser from "../../Context/Hooks/useCurrentUser";

import { Header, SelectLanguage, SectionTitle } from "./styled";

import SongCard from "../../Components/SongCard";

import { languages } from "../LanguagePage/languageList";

const MainPage = (props) => {
  const { setSelectedLanguage, selectedLanguage } = useLanguage();
  const { currentUser } = useCurrentUser();

  const [list, setList] = useState();

  const getList = useCallback(async () => {

    const data = await useReadFirebase('Songs');

    if (data) {
      setList(data);
      return;
    }

    setList(null);
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

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
        <SelectLanguage>
          <Text>{selectedLanguage?.label}</Text>
        </SelectLanguage>
      </Header>
      <ScrollView>
          {list &&
            <>
              <SongCard
                key={list[0].id}
                song={list[0]}
                file={require('../../assets/BS4CmkiEm7fcmo0r95bw.mp3')}
                navigation={props.navigation}
              />
              <SongCard
                key={list[1].id}
                song={list[1]}
                file={require('../../assets/TtsqdbDDW0xMnQ2zJlu7.mp3')}
                navigation={props.navigation}
              />
            </>
          }
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;

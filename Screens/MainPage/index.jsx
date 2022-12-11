import { ScrollView, Text, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import useReadFirebase from "../../Context/Hooks/useReadFirebase";

import useLanguage from "../../Context/Hooks/useLanguage";
import useCurrentUser from "../../Context/Hooks/useCurrentUser";

import { Header, SelectLanguage, SectionTitle, List } from "./styled";

import SongCard from "../../Components/SongCard";

import { languages } from "../LanguagePage/languageList";

const MainPage = (props) => {
  const { setSelectedLanguage, selectedLanguage } = useLanguage();
  const { currentUser } = useCurrentUser();

  const [list, setList] = useState();

  const getList = useCallback(async () => {
    const data = await useReadFirebase("Songs");

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
    if (!selectedLanguage) {
      const usersDefaultLanguage = languages.filter(
        (language) => language?.alias === currentUser?.locale
      );
      setSelectedLanguage(usersDefaultLanguage[0]);
    }
  }, [currentUser]);

  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
      <Header>
        <SectionTitle>Minhas músicas</SectionTitle>
        <SelectLanguage>
          <Text>{selectedLanguage?.label}</Text>
        </SelectLanguage>
      </Header>
      <List>
        {list && (
          <>
            <SongCard
              key={list[0].id}
              song={list[0]}
              file={require("../../assets/009nD8iOMVWmWGv3ijMk.mp3")}
              navigation={props.navigation}
            />
            <SongCard
              key={list[1].id}
              song={list[1]}
              file={require("../../assets/3HeIFf7BGEHrGzGfCXci.mp3")}
              navigation={props.navigation}
            />
            <SongCard
              key={list[2].id}
              song={list[2]}
              file={require("../../assets/BS4CmkiEm7fcmo0r95bw.mp3")}
              navigation={props.navigation}
            />
            <SongCard
              key={list[3].id}
              song={list[3]}
              file={require("../../assets/KKxzi9R0iMCTX6cXC3Gh.mp3")}
              navigation={props.navigation}
            />
            <SongCard
              key={list[4].id}
              song={list[4]}
              file={require("../../assets/OEvfGSIafA4OQkXzwSLr.mp3")}
              navigation={props.navigation}
            />
            <SongCard
              key={list[5].id}
              song={list[5]}
              file={require("../../assets/PYZtKjthWrRbPdc7XS2p.mp3")}
              navigation={props.navigation}
            />
            <SongCard
              key={list[6].id}
              song={list[6]}
              file={require("../../assets/TtsqdbDDW0xMnQ2zJlu7.mp3")}
              navigation={props.navigation}
            />
            <SongCard
              key={list[7].id}
              song={list[7]}
              file={require("../../assets/U0O8Xnw4CUw68N4HzJfo.mp3")}
              navigation={props.navigation}
            />
            <SongCard
              key={list[8].id}
              song={list[8]}
              file={require("../../assets/XmTmtDJOPtnk9C4HB349.mp3")}
              navigation={props.navigation}
            />
            <SongCard
              key={list[9].id}
              song={list[9]}
              file={require("../../assets/dt3F6liEOPLUVQB2AQIq.mp3")}
              navigation={props.navigation}
            />
          </>
        )}
      </List>
    </SafeAreaView>
  );
};

export default MainPage;

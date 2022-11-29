import { Text, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

import useLanguage from "../../Context/Hooks/useLanguage";
import useCurrentUser from "../../Context/Hooks/useCurrentUser";

import { List, Header, SelectLanguage, SectionTitle } from "./styled";

import MusicCard from "../../Components/MusicCard";

import { languages } from "../LanguagePage/languageList";

const MainPage = (props) => {
  const { setSelectedLanguage, selectedLanguage } = useLanguage();
  const { currentUser } = useCurrentUser();

  const [list, setList] = useState();

  const getList = useCallback(async () => {
    const endpoint =
      "/chart.tracks.get?chart_name=mxmweekly&page=1&page_size=15&country=us&f_has_lyrics=1&apikey=4306ade10d6239b3b17e0aadf07f0ff9";

    const data = await api.get(endpoint).then((res) => res.data);

    if (data) {
      setList(data.message?.body?.track_list);
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
      {list ? (
        <List
          data={list}
          renderItem={({ item }) => (
            <MusicCard
              key={item.track.track_id}
              music={item.track}
              navigation={props.navigation}
            />
          )}
          keyExtractor={({ track }) => track.track_id}
        />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default MainPage;

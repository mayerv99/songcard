import { SafeAreaView, View, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import api from '../../services/api'

import useCurrentSong from "../../Context/Hooks/useCurrentSong";

import { LyricsWrapper, Word } from "./styled";

function LearningPage({ navigation }) {
  const { currentSong } = useCurrentSong();

  const [lyrics, setLyrics] = useState();

  const getLyrics = useCallback(async () => {
    if (currentSong === undefined)
    {
      return;
    }

    const endpoint = `/track.lyrics.get?track_id=${currentSong.track_id}&apikey=4306ade10d6239b3b17e0aadf07f0ff9`,
          data = await api.get(endpoint).then(res => res.data),
          lyrics = data?.message?.body?.lyrics?.lyrics_body;

    if (lyrics?.length) {
      const rawLyrics = lyrics.split('');
      rawLyrics.splice(-75);
      setLyrics(rawLyrics.join(''));
      return;
    }

    setLyrics(null);
  }, [currentSong]);

  useEffect(() => {
    getLyrics();
  }, [getLyrics])

  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
      <LyricsWrapper onPress={() => currentSong === undefined && navigation.navigate("mainPage")}>
        {currentSong === undefined && <Text>←  Volte e selecione uma música</Text>}
        {lyrics?.length && lyrics?.split('\n').map((line, index) =>
            <Text key={index}>
              {line.split(' ').map((word, index) =>
                <View key={index}>
                  <Word>{word}</Word>
                </View>
              )}
            </Text>
        )}
        {currentSong === null && <Text>Falha ao carregar letra da música.</Text>}
      </LyricsWrapper>
    </SafeAreaView>
  );
}

export default LearningPage;

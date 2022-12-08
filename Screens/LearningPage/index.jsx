import { SafeAreaView, View, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

import _ from "lodash";

import useCurrentSong from "../../Context/Hooks/useCurrentSong";

import {
  LyricsWrapper,
  Word,
  Navbar,
  InfoCard,
  InfoGroup,
  TextCount,
  TextDescription,
  SongTitle,
  ArtistName,
  WordText,
} from "./styled";

function LearningPage({ navigation }) {
  const { currentSong, selectedWords, setSelectedWords } = useCurrentSong();

  const [lyrics, setLyrics] = useState();

  const getLyrics = useCallback(async () => {
    if (currentSong === undefined) {
      return;
    }

    const endpoint = `/track.lyrics.get?track_id=${currentSong.track_id}&apikey=4306ade10d6239b3b17e0aadf07f0ff9`,
      data = await api.get(endpoint).then((res) => res.data),
      lyrics = data?.message?.body?.lyrics?.lyrics_body;

    if (lyrics?.length) {
      const rawLyrics = lyrics.split("");
      rawLyrics.splice(-75);
      setLyrics(rawLyrics.join(""));
      return;
    }

    setLyrics(null);
  }, [currentSong]);

  useEffect(() => {
    getLyrics();
  }, [getLyrics]);

  const shadowStyle = {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {height: 5},
  };

  const checkIfWordExists = (selectedWord) => {
    return selectedWords.some((element) => _.isEqual(element, selectedWord));
  };

  const addWord = (selectedWord) => {
    return setSelectedWords((prevState) => [...prevState, selectedWord]);
  };

  const removeWord = (selectedWord) => {
    return setSelectedWords(
      selectedWords.filter((element) => !_.isEqual(element, selectedWord))
    );
  };

  const handlePressWord = (selectedWord) => {
    if (checkIfWordExists(selectedWord)) {
      return removeWord(selectedWord);
    }
    return addWord(selectedWord);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
      <Navbar>
        <SongTitle>
          {currentSong?.track_name.substring(0, 25)}
          {currentSong?.track_name.length > 25 && "..."}
        </SongTitle>
        <ArtistName>
          {currentSong?.artist_name.substring(0, 25)}
          {currentSong?.artist_name.length > 25 && "..."}
        </ArtistName>
        <InfoCard style={shadowStyle}>
          <InfoGroup>
            <TextCount>{selectedWords?.length}</TextCount>
            <TextDescription>Palavras selecionadas</TextDescription>
          </InfoGroup>

          <InfoGroup>
            <TextCount>{lyrics?.length}</TextCount>
            <TextDescription>Tot. palavras</TextDescription>
          </InfoGroup>
        </InfoCard>
      </Navbar>

      <LyricsWrapper
        style={shadowStyle}
        onPress={() =>
          currentSong === undefined && navigation.navigate("mainPage")
        }
      >
        {currentSong === undefined && (
          <Text>← Volte e selecione uma música</Text>
        )}
        {lyrics?.length &&
          lyrics?.split("\n").map((line, lineIndex) => (
            <Text key={lineIndex}>
              {line.split(" ").map((word, wordIndex) => (
                <View key={wordIndex}>
                  <Word
                    onPress={() =>
                      handlePressWord({ lineIndex, wordIndex, word })
                    }
                    selected={checkIfWordExists({ lineIndex, wordIndex, word })}
                  >
                    <WordText
                      selected={checkIfWordExists({
                        lineIndex,
                        wordIndex,
                        word,
                      })}
                    >
                      {word}
                    </WordText>
                  </Word>
                </View>
              ))}
            </Text>
          ))}
        {currentSong === null && (
          <Text>Falha ao carregar letra da música.</Text>
        )}
      </LyricsWrapper>
    </SafeAreaView>
  );
}

export default LearningPage;

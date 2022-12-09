import { SafeAreaView, View, Text } from "react-native";
import React, { useState } from "react";
import { Foundation } from '@expo/vector-icons';

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
  PlayPauseButton
} from "./styled";

function LearningPage({ navigation }) {
  const { currentSong, selectedWords, setSelectedWords, songFile } = useCurrentSong();

  const [playing, setPlaying] = useState(false);
  // const [lyrics, setLyrics] = useState();

  //const getLyrics = useCallback(async () => {
  //if (currentSong === undefined) {
  //  return;
  //}

  //const endpoint = `/track.lyrics.get?track_id=${currentSong.track_id}&apikey=4306ade10d6239b3b17e0aadf07f0ff9`,
  //  data = await api.get(endpoint).then((res) => res.data),
  //  lyrics = data?.message?.body?.lyrics?.lyrics_body;

  //if (lyrics?.length) {
  //  const rawLyrics = lyrics.split("");
  //  rawLyrics.splice(-75);
  //  setLyrics(rawLyrics.join(""));
  //  return;
  //}

  //setLyrics(null);
  //}, [currentSong]);

  //useEffect(() => {
  //  getLyrics();
  //}, [getLyrics]);

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

  const handlePressPlayPause = () => {
    playing === false && songFile.pauseAsync();
    playing && songFile.playAsync();
    setPlaying(prev => !prev);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
      <Navbar>
        <SongTitle>
          {currentSong?.name.substring(0, 40)}
          {currentSong?.name.length > 40 && "..."}
        </SongTitle>
        <ArtistName>
          {currentSong?.name.substring(0, 40)}
          {currentSong?.name.length > 40 && "..."}
        </ArtistName>
        <InfoCard style={shadowStyle}>
          <InfoGroup>
            <TextCount>{selectedWords?.length}</TextCount>
            <TextDescription>Palavras selecionadas</TextDescription>
          </InfoGroup>

          <InfoGroup>
            <TextCount>{currentSong?.lyrics?.length}</TextCount>
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
        {currentSong?.lyrics?.length &&
          currentSong?.lyrics?.split(/(?=[A-Z])/).map((line, lineIndex) => (
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

      <PlayPauseButton
        onPress={handlePressPlayPause}
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}
      >
        <Foundation name={playing ? 'play' : 'pause'} size={28} color="white" />
      </PlayPauseButton>
    </SafeAreaView>
  );
}

export default LearningPage;

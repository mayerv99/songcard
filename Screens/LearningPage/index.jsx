import { SafeAreaView, View, Text } from "react-native";
import { Foundation } from "@expo/vector-icons";

import _ from "lodash";

import useCurrentSong from "../../Context/Hooks/useCurrentSong";
import useWriteFirebase from "../../Context/Hooks/useWriteFirebase";
import useReadFirebase from "../../Context/Hooks/useReadFirebase";
import useCurrentUser from "../../Context/Hooks/useCurrentUser";

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
  PlayPauseButton,
} from "./styled";
import { useEffect } from "react";

function LearningPage({ navigation }) {
  const {
    currentSong,
    selectedWords,
    setSelectedWords,
    songFile,
    playing,
    setPlaying,
  } = useCurrentSong();

  const { currentUser } = useCurrentUser();

  const shadowStyle = {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { height: 5 },
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
    playing && songFile.pauseAsync();
    playing === false && songFile.playAsync();
    setPlaying((prev) => !prev);
  };

  const createMusicInFirebase = async () => {
    const newMusic = await useWriteFirebase(currentUser);
  };

  const getCurrentMusic = async () => {
    console.log("carlos");
    const musicData = await useReadFirebase(currentUser.id).then((res) =>
      console.log(res.data)
    );
    console.log(musicData);
  };

  useEffect(() => {
    console.log("rodou");
    getCurrentMusic();
  }, [currentSong]);

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

      {songFile && (
        <PlayPauseButton
          onPress={handlePressPlayPause}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Foundation
            name={playing ? "pause" : "play"}
            size={28}
            color="white"
          />
        </PlayPauseButton>
      )}
    </SafeAreaView>
  );
}

export default LearningPage;

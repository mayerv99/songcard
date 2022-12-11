import React, { useState, useMemo, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";

import useCurrentSong from "../../Context/Hooks/useCurrentSong";
import useReadFirebase from "../../Context/Hooks/useReadFirebase";
import useCurrentUser from "../../Context/Hooks/useCurrentUser";

import {
  TopBar,
  InfoCard,
  InfoGroup,
  TextCount,
  TextDescription,
  CardsWrapper,
  FlashCardWrapper,
  FlashCardHeader,
  FlashCardTitle,
  FlashCardBody,
  FlashCardBodyText,
  SongTitle,
  ArtistName,
  LoginMessageWrapper,
} from "./styled";

function CollectionPage() {
  const { selectedWords, listenedSongs } = useCurrentSong();

  const { currentUser } = useCurrentUser();

  const [flashCardsMusic, setFlashCardsMusic] = useState(null);
  const [musicsIdList, setMusicsIdList] = useState([]);

  const infoCardData = () => {
    return !flashCardsMusic
      ? [
          { label: "Músicas", value: listenedSongs?.length ?? "-" },
          { label: "Flashcards", value: selectedWords?.length ?? "-" },
          { label: "Tot. palavras", value: selectedWords?.length ?? "-" },
        ]
      : [
          { label: "Palavras", value: selectedWords?.length ?? "-" },
          { label: "Expressões", value: selectedWords?.length ?? "-" },
          { label: "Tot. palavras", value: selectedWords?.length ?? "-" },
        ];
  };

  const shadowStyle = {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  };

  const handleSelectSong = async (song) => {
    const words = await useReadFirebase(currentUser.id, song?.id);
    setFlashCardsMusic(words[0]);
  };

  const getUserCollections = async () => {
    const userMusics = await useReadFirebase(currentUser?.id);
    setMusicsIdList(userMusics);
  };

  useEffect(() => {
    getUserCollections();
  }, []);

  const generateSongsFlashCard = useMemo(
    () =>
      musicsIdList.map((song) => (
        <FlashCardWrapper key={song?.id} onPress={() => handleSelectSong(song)}>
          <FlashCardHeader>
            <FlashCardTitle>{song?.songData?.name}</FlashCardTitle>
          </FlashCardHeader>
          <FlashCardBody>
            <FlashCardBodyText>
              by {song?.songData?.artist?.substring(0, 15)}
              {song?.songData?.artist?.length > 15 && "..."}
            </FlashCardBodyText>
          </FlashCardBody>
        </FlashCardWrapper>
      )),
    [listenedSongs, musicsIdList]
  );

  const generateWordsFlashCard = useMemo(
    () =>
      flashCardsMusic?.selectedWords?.map((word) => (
        <FlashCardWrapper onPress={}>
          <FlashCardHeader>
            <FlashCardTitle>{word?.word}</FlashCardTitle>
          </FlashCardHeader>
          <FlashCardBody>
            <FlashCardBodyText>

            </FlashCardBodyText>
          </FlashCardBody>
        </FlashCardWrapper>
      )),
    [flashCardsMusic]
  );

  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
      <TopBar>
        {flashCardsMusic && (
          <FlashCardBodyText onPress={() => setFlashCardsMusic(null)}>
            Voltar
          </FlashCardBodyText>
        )}
        {flashCardsMusic ? (
          <>
            <SongTitle>{flashCardsMusic?.songData?.name}</SongTitle>
            <ArtistName>{flashCardsMusic?.songData?.artist}</ArtistName>
          </>
        ) : (
          <>
            <SongTitle>Suas músicas</SongTitle>
          </>
        )}
        <InfoCard style={shadowStyle}>
          {infoCardData().map((data, index) => (
            <InfoGroup key={index}>
              <TextCount>{data.value}</TextCount>
              <TextDescription>{data.label}</TextDescription>
            </InfoGroup>
          ))}
        </InfoCard>
      </TopBar>
      {currentUser ? (
        <CardsWrapper>
          {!flashCardsMusic ? generateSongsFlashCard : generateWordsFlashCard}
        </CardsWrapper>
      ) : (
        <LoginMessageWrapper>
          <Text>Para acessar esta área você precisa estar logado.</Text>
        </LoginMessageWrapper>
      )}
    </SafeAreaView>
  );
}

export default CollectionPage;

import React, { useState, useMemo, useEffect } from "react";
import { SafeAreaView } from "react-native";

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
} from "./styled";

function CollectionPage() {
  const { selectedWords, listenedSongs } = useCurrentSong();

  const { currentUser } = useCurrentUser();

  const [flashCardsMusic, setFlashCardsMusic] = useState(null);

  const infoCardData = () => {
    return !flashCardsMusic
      ? [
          { label: "Músicas", value: listenedSongs?.length },
          { label: "Flashcards", value: selectedWords?.length },
          { label: "Tot. palavras", value: selectedWords?.length },
        ]
      : [
          { label: "Palavras", value: selectedWords?.length },
          { label: "Expressões", value: selectedWords?.length },
          { label: "Tot. palavras", value: selectedWords?.length },
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

  const handleSelectSong = (song) => {
    setFlashCardsMusic(song);
  };

  const getUserCollections = async () => {
    const userMusics = await useReadFirebase(currentUser.id);
  };

  useEffect(() => {
    getUserCollections();
  }, []);

  const generateSongsFlashCard = useMemo(
    () =>
      listenedSongs.map((song) => (
        <FlashCardWrapper key={song?.id} onPress={() => handleSelectSong(song)}>
          <FlashCardHeader>
            <FlashCardTitle>{song?.name}</FlashCardTitle>
          </FlashCardHeader>
          <FlashCardBody>
            <FlashCardBodyText>
              by {song?.artist.substring(0, 15)}
              {song?.artist?.length > 15 && "..."}
            </FlashCardBodyText>
          </FlashCardBody>
        </FlashCardWrapper>
      )),
    [listenedSongs]
  );

  const generateWordsFlashCard = useMemo(() =>
    selectedWords.map((word) => (
      <FlashCardWrapper onPress={() => handleSelectSong(word)}>
        <FlashCardHeader>
          <FlashCardTitle>{word?.name}</FlashCardTitle>
        </FlashCardHeader>
        <FlashCardBody>
          <FlashCardBodyText></FlashCardBodyText>
        </FlashCardBody>
      </FlashCardWrapper>
    ))
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
            <SongTitle>{flashCardsMusic?.name}</SongTitle>
            <ArtistName>{flashCardsMusic?.artist}</ArtistName>
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
      <CardsWrapper>
        {!flashCardsMusic ? generateSongsFlashCard : generateWordsFlashCard}
      </CardsWrapper>
    </SafeAreaView>
  );
}

export default CollectionPage;

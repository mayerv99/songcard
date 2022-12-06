import React, { useMemo } from "react";
import { SafeAreaView } from "react-native";

import useCurrentSong from "../../Context/Hooks/useCurrentSong";

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
} from "./styled";

function CollectionPage() {
  const { selectedWords, listenedSongs } = useCurrentSong();

  const shadowStyle = {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  };

  const generateSongFlashCard = useMemo(
    () =>
      listenedSongs.map((song) => (
        <>
          <FlashCardWrapper>
            <FlashCardHeader>
              <FlashCardTitle>{song?.track_name}</FlashCardTitle>
            </FlashCardHeader>
            <FlashCardBody>
              <FlashCardBodyText>
                by {song?.artist_name.substring(0, 15)}
                {song?.artist_name?.length > 15 && "..."}
              </FlashCardBodyText>
            </FlashCardBody>
          </FlashCardWrapper>
        </>
      )),
    [listenedSongs]
  );

  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
      <TopBar>
        <InfoCard style={shadowStyle}>
          <InfoGroup>
            <TextCount>{listenedSongs?.length}</TextCount>
            <TextDescription>Músicas</TextDescription>
          </InfoGroup>
          <InfoGroup>
            <TextCount>{selectedWords?.length}</TextCount>
            <TextDescription>Flashcards</TextDescription>
          </InfoGroup>
          <InfoGroup>
            <TextCount>{selectedWords?.length}</TextCount>
            <TextDescription>Tot. palavras</TextDescription>
          </InfoGroup>
        </InfoCard>
      </TopBar>
      <CardsWrapper>{generateSongFlashCard}</CardsWrapper>
    </SafeAreaView>
  );
}

export default CollectionPage;

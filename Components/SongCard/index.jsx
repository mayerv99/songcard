import React, { useCallback } from "react";

import useCurrentSong from "../../Context/Hooks/useCurrentSong";

import {
  Wrapper,
  RoundedPic,
  SongNameAndArtist,
  SongName,
  ArtistName,
} from "./styled";

const SongCard = ({ song, navigation }) => {
  const { setCurrentSong } = useCurrentSong();

  const handlePress = useCallback(() => {
    setCurrentSong(song);
    navigation.navigate("learningPage");
  }, [song]);

  return (
    <Wrapper onPress={handlePress}>
      <RoundedPic source={{uri: song.img}}></RoundedPic>
      <SongNameAndArtist>
        <SongName>{song.name}</SongName>
        <ArtistName>{song.artist}</ArtistName>
      </SongNameAndArtist>
    </Wrapper>
  );
};

export default SongCard;

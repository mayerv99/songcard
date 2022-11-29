import React, { useCallback } from "react";

import useCurrentSong from "../../Context/Hooks/useCurrentSong";

import {
  Wrapper,
  RoundedPic,
  MusicAndArtist,
  MusicName,
  ArtistName,
} from "./styled";

const MusicCard = ({ music, navigation }) => {
  const { setCurrentSong } = useCurrentSong();

  const handlePress = useCallback(() => {
    setCurrentSong(music);
    navigation.navigate("learningPage");
  }, [music]);

  return (
    <Wrapper onPress={handlePress}>
      <RoundedPic>
      </RoundedPic>
      <MusicAndArtist>
        <MusicName>{music.track_name}</MusicName>
        <ArtistName>{music.artist_name}</ArtistName>
      </MusicAndArtist>
    </Wrapper>
  );
};

export default MusicCard;

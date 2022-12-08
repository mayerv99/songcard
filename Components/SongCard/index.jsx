import React, { useCallback } from "react";

import useCurrentSong from "../../Context/Hooks/useCurrentSong";

import {
  Wrapper,
  RoundedPic,
  SongNameAndArtist,
  SongName,
  ArtistName,
} from "./styled";

const MusicCard = ({ music, navigation }) => {
  const { setCurrentSong, addNewListenedSong } = useCurrentSong();

  const handlePress = useCallback(() => {
    setCurrentSong(song);
    navigation.navigate("learningPage");
    addNewListenedSong(music);
  }, [music]);

  return (
    <Wrapper onPress={handlePress}>
      <RoundedPic></RoundedPic>
      <MusicAndArtist>
        <MusicName>{music.track_name}</MusicName>
        <ArtistName>{music.artist_name}</ArtistName>
      </MusicAndArtist>
    </Wrapper>
  );
};

export default SongCard;

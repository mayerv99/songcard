import React from "react";

import {
  Wrapper,
  RoundedPic,
  MusicAndArtist,
  MusicName,
  ArtistName,
} from "./styled";

const MusicCard = ({ music }) => {
  return (
    <Wrapper>
      <RoundedPic />
      <MusicAndArtist>
        <MusicName>{music.musicName}</MusicName>
        <ArtistName>{music.artist}</ArtistName>
      </MusicAndArtist>
    </Wrapper>
  );
};

export default MusicCard;

import React from "react";

import {
  Wrapper,
  RoundedPic,
  MusicAndArtist,
  MusicName,
  ArtistName,
} from "./styled";

const MusicCard = ({music}) => {
  return (
    <Wrapper>
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

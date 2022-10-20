import React from "react";

import { Image } from "react-native";

import {
  Wrapper,
  RoundedPic,
  MusicAndArtist,
  MusicName,
  ArtistName,
} from "./styled";

const MusicCard = ({ music }) => {
  const imagePath = `../../Screens/MainPage/musicsListForPrototype/vivaLaVida.png`;
  return (
    <Wrapper>
      <RoundedPic>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 50 }}
          source={require(imagePath)}
        />
      </RoundedPic>
      <MusicAndArtist>
        <MusicName>{music.musicName}</MusicName>
        <ArtistName>{music.artist}</ArtistName>
      </MusicAndArtist>
    </Wrapper>
  );
};

export default MusicCard;

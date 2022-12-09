import React, { useCallback } from "react";
import { Audio } from 'expo-av';

import useCurrentSong from "../../Context/Hooks/useCurrentSong";

import {
  Wrapper,
  RoundedPic,
  ArtistName,
  SongName,
  SongNameAndArtist,
} from "./styled";

const SongCard = ({ song, file, navigation }) => {
  const { setCurrentSong, addNewListenedSong, setSongFile } = useCurrentSong();

  async function playSound() {
    console.log('---------------- Loading Sound');
    const { sound } = await Audio.Sound.createAsync(file);

    setSongFile(sound);

    console.log('---------------- Playing Sound');
    await sound.playAsync();
  }

  const handlePress = useCallback(() => {
    playSound()
    setCurrentSong(song);
    navigation.navigate("learningPage");
    addNewListenedSong(song);
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

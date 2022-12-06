import _ from "lodash";
import { useContext } from "react";

import { CurrentSongContext } from "../CurrentSongContext";

export default function useCurrentSong() {
  const {
    currentSong,
    setCurrentSong,
    selectedWords,
    setSelectedWords,
    listenedSongs,
    setListenedsSongs,
  } = useContext(CurrentSongContext);

  const addNewListenedSong = (newSong) => {
    if (musicAlreadyOnList(newSong)) {
      console.log("Já existe");
      return;
    }
    console.log("n existe");
    setListenedsSongs((prevValues) => [...prevValues, newSong]);
  };

  const musicAlreadyOnList = (newSong) => {
    return listenedSongs.some((song) => _.isEqual(song, newSong));
  };

  return {
    currentSong,
    setCurrentSong,
    selectedWords,
    setSelectedWords,
    listenedSongs,
    setListenedsSongs,
    addNewListenedSong,
  };
}

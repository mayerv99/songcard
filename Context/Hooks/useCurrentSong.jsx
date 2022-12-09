import _ from "lodash";
import { useContext, useEffect } from "react";

import { CurrentSongContext } from "../CurrentSongContext";

export default function useCurrentSong() {
  const {
    currentSong,
    setCurrentSong,
    selectedWords,
    setSelectedWords,
    listenedSongs,
    setListenedsSongs,
    songFile,
    setSongFile
  } = useContext(CurrentSongContext);

  useEffect(() => {
    setSelectedWords([]);
  }, [currentSong]);

  const addWordsToSong = (word) => {};

  // Fix function, creating a new value even when value already exists
  const addNewListenedSong = (newSong) => {
    if (musicAlreadyOnList(newSong)) {
      console.log("Já existe");
      return;
    }
    console.log("n existe");
    setListenedsSongs((prevValues) => [...prevValues, newSong]);
  };

  const musicAlreadyOnList = (newSong) => {
    return listenedSongs.some((song) => song.id === newSong.id);
  };

  return {
    currentSong,
    setCurrentSong,
    selectedWords,
    setSelectedWords,
    listenedSongs,
    setListenedsSongs,
    addNewListenedSong,
    songFile,
    setSongFile
  };
}

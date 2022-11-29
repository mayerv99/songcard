import { useContext } from "react";

import { CurrentSongContext } from "../CurrentSongContext";

export default function useCurrentSong() {
  const { currentSong, setCurrentSong, selectedWords, setSelectedWords } =
    useContext(CurrentSongContext);
  return { currentSong, setCurrentSong, selectedWords, setSelectedWords };
}

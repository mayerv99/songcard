import { useContext } from "react";

import { CurrentSongContext } from "../CurrentSongContext";

export default function useCurrentSong() {
  const { currentSong, setCurrentSong } = useContext(CurrentSongContext);
  return { currentSong, setCurrentSong };
}

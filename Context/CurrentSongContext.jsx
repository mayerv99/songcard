import { createContext, useState } from "react";

export const CurrentSongContext = createContext();

export default function CurrentSongProvider({ children }) {
  const [currentSong, setCurrentSong] = useState();
  const [selectedWords, setSelectedWords] = useState([]);

  return (
    <CurrentSongContext.Provider
      value={{ currentSong, setCurrentSong, selectedWords, setSelectedWords }}
    >
      {children}
    </CurrentSongContext.Provider>
  );
}

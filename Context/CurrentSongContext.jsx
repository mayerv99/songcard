import { createContext, useState } from "react";

export const CurrentSongContext = createContext();

export default function CurrentSongProvider({ children }) {
  const [currentSong, setCurrentSong] = useState();

  return (
    <CurrentSongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </CurrentSongContext.Provider>
  );
}

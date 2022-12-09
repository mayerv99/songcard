import { createContext, useEffect, useState } from "react";

export const CurrentSongContext = createContext();

export default function CurrentSongProvider({ children }) {
  const [currentSong, setCurrentSong] = useState();
  const [selectedWords, setSelectedWords] = useState([]);
  const [listenedSongs, setListenedsSongs] = useState([]);
  const [songFile, setSongFile] = useState();

  return (
    <CurrentSongContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        selectedWords,
        setSelectedWords,
        listenedSongs,
        setListenedsSongs,
        songFile,
        setSongFile
      }}
    >
      {children}
    </CurrentSongContext.Provider>
  );
}

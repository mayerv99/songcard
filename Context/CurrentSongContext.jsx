import { createContext, useState } from "react";

export const CurrentSongContext = createContext();

export default function CurrentSongProvider({ children }) {
  const [currentSong, setCurrentSong] = useState();
  const [selectedWords, setSelectedWords] = useState([]);
  const [listenedSongs, setListenedsSongs] = useState([]);
  const [songFile, setSongFile] = useState();
  const [playing, setPlaying] = useState(false);

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
        setSongFile,
        playing,
        setPlaying
      }}
    >
      {children}
    </CurrentSongContext.Provider>
  );
}

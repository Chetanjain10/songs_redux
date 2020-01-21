import { combineReducers } from "redux";

//static list of songs
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "Al Star", duration: "2:35" },
    { title: "I Want it that way", duration: "1:45" }
  ];
};

//Reducer for selecting a particular song

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

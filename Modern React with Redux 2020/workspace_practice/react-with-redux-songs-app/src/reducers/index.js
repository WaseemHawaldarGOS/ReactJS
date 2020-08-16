import {combineReducers} from "redux";

const songListReducer = () =>{
    return [
        {
            title: 'song1',
            duration: '1:5min'
        },
        {
            title: 'song2',
            duration: '2:5min'
        },
        {
            title: 'song3',
            duration: '3:5min'
        },
        {
            title: 'song4',
            duration: '4:5min'
        }
    ]
}

const selectSongReducer = (song = null, action) => {
    if(action.type === "SELECTED_SONG"){
        return action.payload;
    }

    return song;
}

export default combineReducers({
   songs: songListReducer,
   selectedSong: selectSongReducer
});
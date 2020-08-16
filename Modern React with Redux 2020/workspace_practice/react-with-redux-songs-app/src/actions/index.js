export const selectSongAction = song =>{
    return {
        type: "SELECTED_SONG",
        payload: song
    }
}
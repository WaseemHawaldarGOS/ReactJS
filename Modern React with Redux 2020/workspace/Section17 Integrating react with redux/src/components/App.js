import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';


/**
    Complete application flow.
    We have 2 reducers defined in reducers/index.js.
    songsReducer is used to store static song list songs property.
    selectedSongReducer is used to catch the action dispatched and accordingly update the selectedSong property.

    Once user click on select button, an action will be dispatched bcz we added  the method (selectSong) to connect in SongList.js
    It will be caught by actions/index.js , it returns type as SONG_SELECTED.
    We also have reducer listening to type as SONG_SELECTED, so it updates the redux store accordingly.
**/
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;

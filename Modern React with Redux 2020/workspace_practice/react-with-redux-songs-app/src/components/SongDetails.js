import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({selectedSong}) =>{
    if(!selectedSong){
        return (<div>Select a song</div>)
    }

    return(
        <div>
        <h3>Song Details: </h3>
        <p>
          Title = {selectedSong.title}
          <br/>
          Duration = {selectedSong.duration}
        </p>
        </div>
    )
}

const MapStateToProps = state => (
    {
        selectedSong: state.selectedSong
    }
)

export default connect(MapStateToProps) (SongDetails);
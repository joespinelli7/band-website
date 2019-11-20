import React from 'react';
import MusicCard from '../components/MusicCard';

class MusicLists extends React.Component {
  render() {
    // conditionally change musicList array to be whichever state data we're supposed to be rendering.
    // either songs or albums list.
    let musicList;
    if (this.props.albumList) {
      musicList = this.props.albumList;
    } else if (this.props.songList) {
      musicList = this.props.songList;
    }

    return (
      <React.Fragment>
        <p className="flow-text" style={{textAlign: "center", color: '#D50000'}}>{this.props.title}</p>
        <div className="row center-cols center-align">
          {musicList.map(musicObj => {
            if (musicObj.album) {
              return (
                <MusicCard key={musicObj.album.album_id} album={musicObj.album}/>
              )
            } else {
              return (
                <MusicCard key={musicObj.track.track_id} song={musicObj.track}/>
              )
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default MusicLists;

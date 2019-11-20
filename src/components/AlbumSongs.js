import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import {Link} from 'react-router-dom';
import './AlbumSongs.css';

class AlbumSongs extends React.Component {
  // since data only needed for this particular component, create a state here instead of in context api.
  state={
    songs: []
  }

  // axios request to musixmatch api to retrieve all the songs in the album requested based off match.params.id in url
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=${this.props.match.params.id}&page=1&page_size=10&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    )
      .then(albumData => {
        this.setState({
          songs: albumData.data.message.body.track_list
        })
      })
      .catch(err => {
        // handle error and display error page to user here. setState to true and display error page
        console.log(err);
      })
  }

  render() {
    const { songs } = this.state;
    console.log(this.state)
    // number to keep track on how many songs are in album and display num to user.
    let num = 1;
    // have to check all these cases to make sure state for all data is not empty and both are defined and return Spinner while they're waiting to render.
    if (songs === undefined || Object.keys(songs).length === 0) {
      return <Spinner />
    } else {
      return (
        <div className="row center-align">
          <div className="col m12 s12 l12 album-songs">
            <span className="title-album" style={{marginBottom: "30px", fontSize: "50px", color: "#D50000"}}><strong className="song-album-title">Album songs:</strong></span>
              <ul className="collection">
                {this.state.songs.map(song => {
                    return <li key={song.track.track_name} className="collection-item"><strong style={{color: "#D50000"}}>Song {num++}:</strong> {song.track.track_name}, <strong style={{color: "#D50000"}}>Rating:</strong> {song.track.track_rating}/100</li>
                  })
                }
             </ul>
              <Link className="white btn-large red-text" to="/albums">GO BACK<i className="material-icons left">arrow_back</i></Link>
          </div>
        </div>
      );
    }
  }
}

export default AlbumSongs;

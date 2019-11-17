import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import {Link} from 'react-router-dom';
import './Lyrics.css';

class Lyrics extends React.Component {
  // since data only needed for this particular component, create a state here instead of in context api.
  state={
    song: {},
    lyrics: {}
  }

  // axios request to musixmatch api to retrieve lyrics and song data for song user clicked on.
  // w/ react-router-dom the library passes in a prop called match into every route rendered,
  // therefore we can use that info to retrieve lyrics based off song id.
  componentDidMount() {
    axios.all([
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${
        process.env.REACT_APP_MM_KEY
      }`),
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${
        process.env.REACT_APP_MM_KEY
      }`)
    ])
      .then(axios.spread((lyricsData, songData) => {
        this.setState({
          lyrics: lyricsData.data.message.body.lyrics,
          song: songData.data.message.body.track
        })
      }))
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { lyrics, song } = this.state;
    // have to check all these cases to make sure state for all data is not empty and both are defined and return Spinner while they're not.
    if (song === undefined || lyrics === undefined || Object.keys(song).length === 0 || Object.keys(lyrics).length === 0) {
      return <Spinner />
    } else {
      return (
        <div class="row center-align">
          <div class="col m12">
            <div class="card valign-wrapper">
              <div class="card-content red-text">
                <span class="card-title" style={{textAlign: "center", marginBottom: "30px"}}><strong>{song.track_name}</strong></span>
                <p>{lyrics.lyrics_body}</p>
              </div>
            </div>
              <p class="waves-effect waves-light white btn-large"><Link className="red-text" to="/songs">GO BACK<i class="material-icons left">arrow_back</i></Link></p>
          </div>
        </div>
      );
    }
  }
}

export default Lyrics;

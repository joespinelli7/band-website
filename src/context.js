import React from 'react';
import axios from 'axios';

// Creates a Context object. When React renders a component that subscribes to this Context object it will read
// the current context value from the closest matching Provider above it in the tree.
const Context = React.createContext();

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
export class Provider extends React.Component {
  // want this musicList to change based off what page user is viewing.
  state={
    albumList: [],
    songList: []
  }
  // https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.albums.get?format=jsonp&callback=callback&artist_id=7521&page_size=10&apikey=${
  //   process.env.REACT_APP_MM_KEY
  // }`

  // add API request for songs as well and push into songList state array
  componentDidMount() {
    axios.all([
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=7521&page_size=12&&g_album_name=1&apikey=${
        process.env.REACT_APP_MM_KEY
      }`),
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=10641979&page=1&page_size=12&apikey=${
        process.env.REACT_APP_MM_KEY
      }`),
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=10276258&page=1&page_size=12&apikey=${
        process.env.REACT_APP_MM_KEY
      }`)
    ])
      .then(axios.spread((albumData, songsDataOne, songsDataTwo) => {
        // pulling in 2 different song list array so combining them together here:
        const songsArr = [...songsDataOne.data.message.body.track_list, ...songsDataTwo.data.message.body.track_list];

        this.setState({
          albumList: albumData.data.message.body.album_list,
          songList: songsArr
        })
      }))
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    {/* value is state that is passed to components */}
    return (
      <Context.Provider value={this.state}>
        {/* b/c Provider wraps around every other component so all other components (children) will be able to access state. */}
        {this.props.children}
      </Context.Provider>
    );
  }
}

// import Consumer into a component (will then become a component that subscribes to context changes (i.e. state changes).)
// to allow it to access the state from the Context.
export const Consumer = Context.Consumer;

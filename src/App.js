import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import MusicLists from './containers/MusicLists';
import {Switch, Route} from 'react-router-dom';
import {Consumer} from './context.js';
import Spinner from './components/Spinner';
import Home from './components/Home';
import Lyrics from './components/Lyrics';
import AlbumSongs from './components/AlbumSongs';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
  render() {
    return (
      <div>
          <Navbar />
          <Switch>
            <Route exact path="/albums" render={() => {
              return (
                <div className="container">
                  <Consumer>
                    {value => {
                        const { albumList } = value;
                        const title = 'Albums:'

                        if (albumList === undefined || albumList.length === 0) {
                          return <Spinner />
                        } else {
                          return (
                            <MusicLists albumList={albumList} title={title}/>
                          )
                        }
                      }}
                    </Consumer>
                  </div>
              )
            }}/>
            <Route exact path="/songs" render={() => {
              return (
                <div className="container">
                  <Consumer>
                    {value => {
                        const { songList } = value;
                        const title = 'Songs:'

                        if (songList === undefined || songList.length === 0) {
                          return <Spinner />
                        } else {
                          return (
                            <MusicLists songList={songList} title={title}/>
                          )
                        }
                      }}
                    </Consumer>
                  </div>
              )
            }}/>
            <Route exact path="/lyrics/song/:id" component={Lyrics}/>
            <Route exact path="/album/:id/songs" component={AlbumSongs}/>
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />
          </Switch>
      </div>
    );
  }
}

export default App;

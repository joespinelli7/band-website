import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import MusicLists from './containers/MusicLists';
// import axios from 'axios';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Consumer} from './context.js';
import Spinner from './components/Spinner';
import Home from './components/Home';

class App extends React.Component {
  // rapidAPI for playground
  // artist id: 7521
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(res => {
  //       console.log(res)
  //     })
  // }

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
                        const title = 'Albums List:'

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
                        const title = 'Songs List:'

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
            <Route path="/" component={Home} />
          </Switch>
      </div>
    );
  }
}

export default App;

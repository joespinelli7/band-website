import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import MusicLists from './containers/MusicLists';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';

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
          <Route exact path="/" component={MusicLists}/>
        </Switch>
      </div>
    );
  }
}

export default App;

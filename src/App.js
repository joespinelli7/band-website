import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import MusicLists from './containers/MusicLists';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MusicLists />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Home</h1>
      </div>
    );
  }
}

export default App;

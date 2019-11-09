import React from 'react';
import './App.css';
import NavBar from './containers/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Home</h1>
      </div>
    );
  }
}

export default App;

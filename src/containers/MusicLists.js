import React from 'react';
import MusicCard from '../components/MusicCard';
import {Consumer} from '../context.js';

class MusicLists extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return <h1>Lists</h1>
        }}
      </Consumer>
    );
  }
}

// <div className="container">
//   <div className="row center-cols center-align">
//       <MusicCard />
//       <MusicCard />
//       <MusicCard />
//       <MusicCard />
//       <MusicCard />
//       <MusicCard />
//   </div>
// </div>

export default MusicLists;

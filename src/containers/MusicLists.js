import React from 'react';
import MusicCard from '../components/MusicCard';
import {Consumer} from '../context.js';
import Spinner from '../components/Spinner';

class MusicLists extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row center-cols center-align">
          <Consumer>
            {value => {
              // const { album_list } = value;
              console.log(value)
              if (value.musicList === undefined || value.musicList.length === 0) {
                return <Spinner />
              } else {
                return <h1>Lists</h1>
              }
            }}
          </Consumer>
        </div>
      </div>
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

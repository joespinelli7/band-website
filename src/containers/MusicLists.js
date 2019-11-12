import React from 'react';
import MusicCard from '../components/MusicCard';

class MusicLists extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row center-cols center-align">
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
        </div>
      </div>
    );
  }
}

export default MusicLists;

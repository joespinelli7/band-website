import React from 'react';
import MusicCard from '../components/MusicCard';

class MusicLists extends React.Component {
  render() {
    return (
      <body>
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
    </body>
    );
  }
}

export default MusicLists;

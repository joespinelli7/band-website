import React from 'react';
import MusicCard from '../components/MusicCard';
import {Consumer} from '../context.js';
import Spinner from '../components/Spinner';

class MusicLists extends React.Component {
  render() {
    return (
      <div className="container">
        <Consumer>
        {/* have to change value to either song or album based off url user is on */}
          {value => {
            const { albumList, title } = value;
            console.log(title)
            if (albumList === undefined || albumList.length === 0) {
              return <Spinner />
            } else {
              return (
                <React.Fragment>
                  <h3 className="text-center mb-4">{title}</h3>
                  <div className="row center-cols center-align">
                    {albumList.map(albumObj => (
                      <MusicCard key={albumObj.album.album_id} album={albumObj.album}/>
                    ))}
                  </div>
                </React.Fragment>
              )
            }
          }}
        </Consumer>
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

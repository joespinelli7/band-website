import React from 'react';
import MusicCard from '../components/MusicCard';

class MusicLists extends React.Component {
  render() {
    // conditionally change musicList array to be whichever state data we're supposed to be rendering.
    // either songs or albums list.
    let musicList;
    if (this.props.albumList) {
      musicList = this.props.albumList;
      console.log(musicList)
    } else if (this.props.songList) {
      musicList = this.props.songList;
    }

    return (
      <div>
        <p className="flow-text" style={{textAlign: "center", color: '#D50000'}}>{this.props.title}</p>
        <div className="row center-cols center-align">
          {musicList.map(musicObj => {
            console.log(musicObj)
            if (musicObj.album) {
              return (
                <MusicCard key={musicObj.album.album_id} album={musicObj.album}/>
              )
            } else if (musicObj.track) {
              return (
                <MusicCard key={musicObj.track.track_id} song={musicObj.track}/>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

// <div className="container">
//   <Consumer>
//   {/* have to change value to either song or album based off url user is on */}
//     {value => {
//       const { albumList, title } = value;
//       console.log(title)
//       if (albumList === undefined || albumList.length === 0) {
//         return <Spinner />
//       } else {
//         return (
//           <React.Fragment>
//             <h3 className="text-center mb-4">{title}</h3>
//             <div className="row center-cols center-align">
//               {albumList.map(albumObj => (
//                 <MusicCard key={albumObj.album.album_id} album={albumObj.album}/>
//               ))}
//             </div>
//           </React.Fragment>
//         )
//       }
//     }}
//   </Consumer>
// </div>

export default MusicLists;

import React from 'react';
import './MusicCard.css';
import {Link} from 'react-router-dom';

class MusicCard extends React.Component {
  albumsBtn = () => {
    alert("Work in progress!")
  }

  render() {
    // create all the variables to change based off if data passed in relates to album or songs data.
    let name;
    let rating;
    let releaseDate;
    let albumName;
    let pic;
    if (this.props.album) {
      name = this.props.album.album_name;
      rating = this.props.album.album_rating;
      releaseDate = this.props.album.album_release_date;
      // releaseDate is a string in format yyyy-mm-dd so converting it to format mm/dd/yyyy
      const dateArr = releaseDate.split('-');
      releaseDate = dateArr[1] + '/' + dateArr[2] + '/' + dateArr[0];
      pic = "https://static.stereogum.com/uploads/2019/05/californication-1559316689-828x536.jpg"
    } else if (this.props.song) {
      name = this.props.song.track_name;
      rating = this.props.song.track_rating;
      albumName = this.props.song.album_name;
      pic = "https://img.discogs.com/Qga0ofDjmXgaAtIQx3c4FJCr98o=/fit-in/600x465/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1510692-1225050014.jpeg.jpg"
    }

    return (
        <div className="col m4 s12">
          {/* or <div className="card medium"> */}
          <div className="card hoverable music-card">
            <div className="card-image">
              <img className="responsive-img" alt="Cover Pic" src={`${pic}`} />
            </div>
            <div className="card-content">
              <span className="card-title" style={{marginBottom: "30px", color: "#D50000"}}><strong className="song-title">{name}</strong></span>
              <div className="divider" style={{marginBottom: "20px"}}></div>
              <p>Rating: {rating}/100</p>
              {this.props.album ?
                <p>Release Date: {releaseDate.includes('undefined') ? 'N/A' : releaseDate}</p>
                :
                <p>Album: {albumName}</p>
              }
            </div>
            <div className="card-action">
              {this.props.album ?
                <p className="red-text waves-effect"><Link className="red-text" to={`/album/${this.props.album.album_id}/songs`}>VIEW SONGS ON ALBUM</Link></p>
                :
                <p className="waves-effect"><Link className="red-text" to={`/lyrics/song/${this.props.song.track_id}`}>VIEW LYRICS</Link></p>
              }
            </div>
          </div>
        </div>
    );
  }
}

export default MusicCard;

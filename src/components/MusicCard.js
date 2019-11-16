import React from 'react';

class MusicCard extends React.Component {
  render() {
    let name;
    let rating;
    let releaseDate;
    let albumName;
    if (this.props.album) {
      name = this.props.album.album_name;
      rating = this.props.album.album_rating;
      releaseDate = this.props.album.album_release_date;
    } else if (this.props.song) {
      console.log(this.props.song)
      name = this.props.song.track_name;
      rating = this.props.song.track_rating;
      albumName = this.props.song.album_name;
    }

    return (
        <div className="col m4">
          {/* or <div className="card medium"> */}
          <div className="card">
            <div className="card-image">
              <img src="https://static.stereogum.com/uploads/2019/05/californication-1559316689-828x536.jpg" />
            </div>
            <div className="card-content">
              <span className="card-title flow-text" style={{marginBottom: "20px", color: "#D50000"}}><strong>{name}</strong></span>
              <p>Rating: {rating}/100</p>
              {this.props.album ?
                <p>Release Date: {releaseDate === '' ? 'N/A' : releaseDate}</p>
                :
                <p>Album: {albumName}</p>
              }
            </div>
            <div className="card-action">
              <a className="red-text waves-effect" href="#">Link to Album or Songs</a>
            </div>
          </div>
        </div>
    );
  }
}

export default MusicCard;

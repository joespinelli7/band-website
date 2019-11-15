import React from 'react';

class MusicCard extends React.Component {
  render() {
    return (
        <div className="col m4">
          {/* or <div className="card medium"> */}
          <div className="card">
            <div className="card-image">
              <img src="https://static.stereogum.com/uploads/2019/05/californication-1559316689-828x536.jpg" />
            </div>
            <div className="card-content">
              <span className="card-title flow-text" style={{marginBottom: "20px", color: "#D50000"}}>Song/Album Title</span>
              <p>Song/Album info.</p>
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

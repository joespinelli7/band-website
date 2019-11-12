import React from 'react';

class MusicCard extends React.Component {
  render() {
    return (
        <div className="col m4">
          {/* or <div className="card medium"> */}
          <div className="card">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <span className="card-title">Song/Album Title</span>
            </div>
            <div className="card-content">
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

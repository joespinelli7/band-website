import React from 'react';

class Lyrics extends React.Component {
  state={
    song: {},
    lyrics: {}
  }

  render() {
    return (
      <div className="container">
        <h1>Lyrics</h1>
      </div>
    );
  }
}

export default Lyrics;

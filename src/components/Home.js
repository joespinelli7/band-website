import React from 'react';
import './Home.css';

const home = () => {
  return (
    <React.Fragment>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br></br>
          <h1 className="header center red-text">Welcome Squirrely's!</h1>
          <div className="row center">
            <h5 className="header col s12 light">Check out the release of our latest single, <strong>“Devops Overlord”</strong>!</h5>
          </div>
          <div className="row center">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=_I94-tJlovg" id="download-button" className="btn-large waves-effect waves-light red">Check it out here!</a>
          </div>
          <br></br>

        </div>
      </div>


      <div className="container">
        <div className="section">

          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center red-text"><i className="material-icons">whatshot</i></h2>
                <h5 className="center">What's hot</h5>

                <p className="light">New single <strong style={{fontSize: "14px"}}>“Devops Overlord”</strong> mentioned above! Also in the works is another groundbreaking album. Stay tuned!</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center red-text"><i className="material-icons">group</i></h2>
                <h5 className="center">For the Fans</h5>

                <p className="light">Enter in our weekly giveaways for a chance to win a VIP experience at the Squirrel Whisperer's concert of your choice!</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center red-text"><i className="material-icons">music_video</i></h2>
                <h5 className="center">Next concert date/place</h5>

                <p className="light">Our next live concert will be at Austin City Limits! With specific dates to be released soon.</p>
              </div>
            </div>
          </div>

        </div>
        <br></br>
      </div>

      <footer className="page-footer red">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Band Bio:</h5>
              <p className="grey-text text-lighten-4">Austin’s own Squirrel Whisperers are poised for breakout success thanks to our awesome fans.</p>


            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Social Media:</h5>
              <ul>
                <li><a className="white-text" rel="noopener noreferrer" target="_blank" href="https://twitter.com/ChiliPeppers?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a></li>
                <li><a className="white-text" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/chilipeppers/?hl=en">Instagram</a></li>
                <li><a className="white-text" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/ChiliPeppers/">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          Made by <a className="white-text" rel="noopener noreferrer" target="_blank" href="https://github.com/joespinelli7">Joseph Spinelli</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default home;

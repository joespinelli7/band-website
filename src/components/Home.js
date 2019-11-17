import React from 'react';
import './Home.css';

const home = () => {
  return (
    <React.Fragment>
      <div class="section no-pad-bot" id="index-banner">
        <div class="container">
          <br></br>
          <h1 class="header center red-text">Welcome Squirrely's!</h1>
          <div class="row center">
            <h5 class="header col s12 light">Check out the release of our latest single, <strong>“Devops Overlord”</strong>!</h5>
          </div>
          <div class="row center">
            <a target="_blank" href="https://www.youtube.com/watch?v=_I94-tJlovg" id="download-button" class="btn-large waves-effect waves-light red">Check it out here!</a>
          </div>
          <br></br>

        </div>
      </div>


      <div class="container">
        <div class="section">

          <div class="row">
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center red-text"><i class="material-icons">whatshot</i></h2>
                <h5 class="center">Whats hot</h5>

                <p class="light">New single "Devops Overlord" mentioned above! Also in the works is another groundbreaking album. Stay tuned!</p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center red-text"><i class="material-icons">group</i></h2>
                <h5 class="center">For the Fans</h5>

                <p class="light">Enter in our weekly giveaways for a chance to win a VIP experience at the Squirrel Whisperer's concert of your choice!</p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center red-text"><i class="material-icons">music_video</i></h2>
                <h5 class="center">Next concert date/place</h5>

                <p class="light">Our next live concert will be at Austin City Limits! With specific dates to be released soon.</p>
              </div>
            </div>
          </div>

        </div>
        <br></br>
      </div>

      <footer class="page-footer red">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Band Bio:</h5>
              <p class="grey-text text-lighten-4">Austin’s own Squirrel Whisperers are poised for breakout success thanks to our awesome fans.</p>


            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Social Media:</h5>
              <ul>
                <li><a class="white-text" target="_blank" href="https://twitter.com/ChiliPeppers?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a></li>
                <li><a class="white-text" target="_blank" href="https://www.instagram.com/chilipeppers/?hl=en">Instagram</a></li>
                <li><a class="white-text" target="_blank" href="https://www.facebook.com/ChiliPeppers/">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          Made by Joseph Spinelli
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default home;

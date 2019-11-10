import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      // use options in Materialize by placing them inside .init object like below:
      // {edge: "right"} used to have sidenav pop up on right side of page.
      M.Sidenav.init(elems, {edge: "right"});
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper red accent-4 flow-text">
            <div className="container">
              <a href="#" style={{fontSize:"2.5vw"}} className="brand-logo">Squirrel Whisperer's<i className="material-icons right" style={{fontSize:"2.5vw"}}>music_note</i></a>
              <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className="waves-effect" href="sass.html">Home</a></li>
                <li><a className="waves-effect" href="badges.html">Songs</a></li>
                <li><a className="waves-effect" href="collapsible.html">Albums</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li><a className="waves-effect" href="sass.html">Home</a></li>
          <li><div className="divider"></div></li>
          <li><a className="waves-effect" href="badges.html">Songs</a></li>
          <li><div className="divider"></div></li>
          <li><a className="waves-effect" href="collapsible.html">Albums</a></li>
        </ul>
      </div>
    )
  }
}

// <div className="navbar-fixed">
//   <nav>
//     <div className="nav-wrapper red accent-4">
//       <a href="#" className="brand-logo center">Squirrel Whisperer's 🎸</a>
//       <a href="#" data-target="mobile-demo" className="right sidenav-trigger"><i className="material-icons">menu</i></a>
//       <ul id="nav-mobile" className="right hide-on-med-and-down">
//         <li><a href="sass.html">Home</a></li>
//         <li><a href="badges.html">Songs</a></li>
//         <li><a href="collapsible.html">Albums</a></li>
//       </ul>
//     </div>
//   </nav>
// </div>

export default Navbar;

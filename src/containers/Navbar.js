import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', () => {
      var elems = document.querySelectorAll('.sidenav');
      // use options in Materialize by placing them inside .init object like below:
      // {edge: "right"} used to have sidenav pop up on right side of page.
      M.Sidenav.init(elems, {edge: "right"});
    });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper red accent-4">
            <div className="container">
              <Link to="/"><a style={{fontSize:"2.2vw"}} className="brand-logo">Squirrel Whisperer's<i className="material-icons right" style={{fontSize:"2.2vw"}}>music_note</i></a></Link>
              <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {/* replace: When true, clicking the link will replace the current entry in the history stack instead of adding a new one. */}
                <li className="waves-effect"><Link to="/" replace>Home</Link></li>
                <li className="waves-effect"><Link to="/songs" replace>Songs</Link></li>
                <li className="waves-effect"><Link to="/albums" replace>Albums</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li className="waves-effect"><Link to="/">Home</Link></li>
          <li><div className="divider"></div></li>
          <li className="waves-effect"><Link to="/songs">Songs</Link></li>
          <li><div className="divider"></div></li>
          <li className="waves-effect"><Link to="/albums">Albums</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

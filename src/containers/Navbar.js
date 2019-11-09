import React from 'react';
import './Navbar.css';

class NavBar extends React.Component {
  componentDidMount() {
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.sidenav');
    //   var instances = M.Sidenav.init(elems, {});
    // });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper red accent-4">
            <div className="container">
              <a href="#" className="brand-logo">Squirrel Whisperer's 🎸</a>
              <a href="#" data-target="mobile-demo" className="right sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a class="waves-effect" href="sass.html">Home</a></li>
                <li><a class="waves-effect" href="badges.html">Songs</a></li>
                <li><a class="waves-effect" href="collapsible.html">Albums</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <ul id="slide-out" class="sidenav">
          <li><div class="user-view">
            <div class="background">
              <img src="images/office.jpg" />
            </div>
            <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
            <a href="#name"><span class="white-text name">John Doe</span></a>
            <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div class="divider"></div></li>
          <li><a class="subheader">Subheader</a></li>
          <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
      </div>
    )
  }
}

// <Navbar className="nav-wrapper red accent-4" centerLogo fixed brand={<a />} alignLinks="right">
//   <NavItem href="" className="brand-logo">
//   Getting started
//   </NavItem>
//   <NavItem href="">
//   Getting started
//   </NavItem>
//   <NavItem href="components.html">
//   Components
//   </NavItem>
// </Navbar>

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

export default NavBar;

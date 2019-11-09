import React from 'react';

const Navbar = () => {
  return(
    <div class="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#" class="brand-logo center">Squirrel Whisperer's 🎸</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Songs</a></li>
            <li><a href="collapsible.html">Albums</a></li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  )
}

export default Navbar;

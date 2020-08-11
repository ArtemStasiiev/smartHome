import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
function Nav() {

  const style = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <div className="App">
      <nav>
          <Link style={style} to="/">
            <h1>SmartHome</h1>
          </Link>
          <ul className="nav-links">
            <Link style={style} to="/hall">
              <li>Hall</li>
            </Link>
            <Link style={style} to="/livingRoom">
              <li>Living room</li>
            </Link>
            <Link style={style} to="/bedroom">
              <li>Bedroom</li>
            </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;
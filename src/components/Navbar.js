import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5 ">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand text-white text-lg brand-text" href="#">
                Movies App
                </a>
            </div>
            <ul className="navbar-nav ml-auto text-light d-inline-block">
                <li className="nav-item d-inline-block mr-4">
                    <i class="fab fa-youtube fa-5x" id="youtube-logo"></i>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

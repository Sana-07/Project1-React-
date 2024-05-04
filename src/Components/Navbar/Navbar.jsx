import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import '../../index.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar_effect fixed-top">
      <div className="container responsive-navbar">
        <img src="https://techsmithsbinary.netlify.app/img/logo.png" alt="Brand Logo" height="80" width="80" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Faqs">FAQS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;







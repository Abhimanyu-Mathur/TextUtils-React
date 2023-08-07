import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    {/* <nav className="navbar" style={{backgroundColor: '#e3f2fd'}}> */}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li> */}
        
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        
        </ul>

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.redBackground} id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Background</label>
        </div>

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.greenBackground} id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Background</label>
        </div>

        <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleNavbarMode} id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
        </div>
      
        </div>
      </div>
    </nav>

  )
}

// Defining Navbar prop types
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    homeText: PropTypes.string.isRequired
}

// General Props -> In case we don't define the props, these values will be there by default
Navbar.defaultProps ={
    title: 'Title',
    aboutText: 'About',
    homeText: 'Home'
};

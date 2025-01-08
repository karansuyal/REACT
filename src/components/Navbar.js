import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button className="btn btn-outline-secondary" onClick={props.toggleDarkMode}>
          {props.darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

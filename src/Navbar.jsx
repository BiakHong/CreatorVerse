// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-button">View All Creators</Link>
        <Link to="/add-creator" className="navbar-button">Add A Creator</Link>
      </div>
    </nav>
  );
};

export default Navbar;

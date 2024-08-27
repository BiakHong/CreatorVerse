// Sidebar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="sidebar">
      <Link
        to="/"
        className={`sidebar-link ${activeLink === '/' ? 'active' : ''}`}
        onClick={() => handleLinkClick('/')}
      >
        View All Creators
      </Link>
      <Link
        to="/add-creator"
        className={`sidebar-link ${activeLink === '/add-creator' ? 'active' : ''}`}
        onClick={() => handleLinkClick('/add-creator')}
      >
        Add A Creator
      </Link>
    </div>
  );
};

export default Sidebar;

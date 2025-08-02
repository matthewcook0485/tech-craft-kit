// Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css'; // Import Sidebar.css file

const Sidebar = () => {
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false);

  const toggleToolsMenu = () => {
    setToolsMenuOpen(!toolsMenuOpen);
  };

  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <img src='/logo.png' alt="Logo" className="sidebar-logo" /> {/* Apply the "sidebar-logo" class */}
      </div>

      <ul className="list-unstyled sidebar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <span className="sidebar-parent-link" onClick={toggleToolsMenu}>Tools <i className={`fas fa-chevron-${toolsMenuOpen ? 'up' : 'down'}`}></i></span>
          <ul className={`list-unstyled ${toolsMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="/tools/scrum-poker">Scrum Poker</a>
            </li>
            <li>
              <a href="/tools/json-beautifier">JSON Beautifier</a>
            </li>
            <li>
              <a href="/tools/sql-beautifier">SQL Beautifier</a>
            </li>
            <li>
              <a href="/tools/ai-playground">AI Playground</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/games/breakout">Breakout</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;

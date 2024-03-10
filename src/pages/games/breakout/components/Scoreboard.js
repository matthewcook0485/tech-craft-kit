// Scoreboard.js

import React from 'react';
import '../styles/breakout.css'; // Import CSS

const Scoreboard = ({ score }) => {
  return <div className="scoreboard">Score: {score}</div>;
};

export default Scoreboard;

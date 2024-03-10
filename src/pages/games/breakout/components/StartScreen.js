// StartScreen.js

import React from 'react';
import './styles/breakout.css'; // Import CSS

const StartScreen = ({ onStartClick }) => {
  return (
    <div className="start-screen">
      <h1>Breakout Game</h1>
      <button onClick={onStartClick}>Start Game</button>
    </div>
  );
};

export default StartScreen;

// HighScores.js

import React from 'react';
import '../styles/breakout.css'; // Import CSS

const HighScores = () => {
  // Assuming you have some high scores data to display
  const highScores = [
    { name: 'Player1', score: 1000 },
    { name: 'Player2', score: 900 },
    { name: 'Player3', score: 800 },
    { name: 'Player4', score: 700 },
    { name: 'Player5', score: 600 }
  ];

  return (
    <div className="high-scores">
      <h2>High Scores</h2>
      <ol>
        {highScores.map((entry, index) => (
          <li key={index}>
            {entry.name}: {entry.score}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HighScores;

// BreakoutGame.js

import React, { useState, useEffect, useRef } from 'react';
import Ball from './Ball';
import Paddle from './Paddle';
import Brick from './Brick';
import Scoreboard from './Scoreboard';
import '../styles/breakout.css'; // Updated import path

// Helper function to generate bricks dynamically
const generateBricks = () => {
  // Your logic to generate bricks goes here
  return [
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
    // Add more bricks as needed
  ];
};

const BreakoutGame = () => {
  const [score, setScore] = useState(0);
  const [bricks, setBricks] = useState(generateBricks()); // Using the generateBricks function here

  // Ball properties
  const [ballPosition, setBallPosition] = useState({ x: 300, y: 200 }); // Initial position of the ball
  const [ballSpeed, setBallSpeed] = useState({ x: 5, y: 5 }); // Initial speed of the ball

  // Paddle properties
  const paddleRef = useRef(); // Ref for accessing paddle DOM element
  const paddleWidth = 100; // Width of the paddle
  const [paddlePosition, setPaddlePosition] = useState(250); // Initial position of the paddle

  // Game constants
  const canvasWidth = 600; // Width of the game canvas
  const canvasHeight = 400; // Height of the game canvas
  const ballRadius = 10; // Radius of the ball
  const paddleHeight = 20; // Height of the paddle

  // Function to handle ball movement
  const moveBall = () => {
    // Update ball position
    setBallPosition((prevPosition) => ({
      x: prevPosition.x + ballSpeed.x,
      y: prevPosition.y + ballSpeed.y,
    }));
  };

  // Function to handle paddle movement
  const movePaddle = (e) => {
    const newX = e.clientX - paddleWidth / 2; // Calculate new paddle position based on mouse position
    if (newX >= 0 && newX <= canvasWidth - paddleWidth) {
      // Ensure paddle stays within the canvas
      setPaddlePosition(newX);
    }
  };

  // Function to check collision between two rectangles
  const checkCollision = (rect1, rect2) => {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  };

  // Function to handle collision detection and game logic
  const handleCollisions = () => {
    // Check collision with walls
    if (ballPosition.x <= 0 || ballPosition.x >= canvasWidth - ballRadius * 2) {
      setBallSpeed((prevSpeed) => ({ ...prevSpeed, x: -prevSpeed.x }));
    }
    if (ballPosition.y <= 0) {
      setBallSpeed((prevSpeed) => ({ ...prevSpeed, y: -prevSpeed.y }));
    }

    // Check collision with paddle
    const paddleRect = {
      x: paddlePosition,
      y: canvasHeight - paddleHeight,
      width: paddleWidth,
      height: paddleHeight,
    };
    const ballRect = {
      x: ballPosition.x,
      y: ballPosition.y,
      width: ballRadius * 2,
      height: ballRadius * 2,
    };
    if (checkCollision(ballRect, paddleRect)) {
      setBallSpeed((prevSpeed) => ({ ...prevSpeed, y: -prevSpeed.y }));
    }

    // Check collision with bricks
    bricks.forEach((brick, index) => {
      const brickRect = {
        x: index * 100, // Assuming bricks are evenly spaced with width 100
        y: 0, // Y position of bricks
        width: 100, // Width of each brick
        height: 20, // Height of each brick
      };
      if (checkCollision(ballRect, brickRect)) {
        // Remove brick from array and update score
        const newBricks = [...bricks];
        newBricks.splice(index, 1);
        setBricks(newBricks);
        setScore((prevScore) => prevScore + 10);
        setBallSpeed((prevSpeed) => ({ ...prevSpeed, y: -prevSpeed.y }));
      }
    });
  };

  // Function to update game state on each frame
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateGame = () => {
    moveBall();
    handleCollisions();
  };

  // Use useEffect to run updateGame on each frame
  useEffect(() => {
    const interval = setInterval(updateGame, 1000 / 60); // 60 frames per second
    return () => clearInterval(interval);
  }, [updateGame]); // Include updateGame in the dependency array

  return (
    <div
      className="breakout-game"
      onMouseMove={movePaddle}
      ref={paddleRef}
      style={{ cursor: 'none' }} // Hide cursor when over game area
    >
      <Ball position={ballPosition} radius={ballRadius} />
      <Paddle position={paddlePosition} width={paddleWidth} height={paddleHeight} />
      {bricks.map((brick, index) => (
        <Brick key={index} position={{ x: index * 100, y: 0 }} width={100} height={20} color={brick.color} />
      ))}
      <Scoreboard score={score} />
    </div>
  );
};

export default BreakoutGame;

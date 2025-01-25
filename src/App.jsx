import React, { useState, useEffect } from 'react';
import './App.css';
import boatRight from './assets/boat-right.png';
import boatLeft from './assets/boat-left.png';

function App() {
  const [position, setPosition] = useState({ top: 200, left: 200 }); // Initial position
  const [direction, setDirection] = useState('right'); // Initial direction

  // Handle key press events
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        setPosition((prev) => ({ ...prev, top: prev.top - 10 })); // Move up
        break;
      case 'ArrowDown':
        setPosition((prev) => ({ ...prev, top: prev.top + 10 })); // Move down
        break;
      case 'ArrowLeft':
        setDirection('left'); // Change direction to left
        setPosition((prev) => ({ ...prev, left: prev.left - 10 })); // Move left
        break;
      case 'ArrowRight':
        setDirection('right'); // Change direction to right
        setPosition((prev) => ({ ...prev, left: prev.left + 10 })); // Move right
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <div
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          transition: 'top 0.5s ease, left 0.5s ease', // Smooth transition
        }}
      >
        <img
          src={direction === 'right' ? boatRight : boatLeft} // Toggle image based on direction
          alt="boat"
          className="boat"
        />
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./Maze.css";

const Maze = () => {
  const [gameOver, setGameOver] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Fonction déclenchée si le joueur touche un mur
  const handleCollision = () => {
    setGameOver(true);
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const Win = () => {
    alert("You win!");
  }

  return (
    <div className="container_maze">
      <div className="start"></div>
      <div className="wall" onMouseEnter={handleCollision}></div>
      <div className="wall1" onMouseEnter={handleCollision}></div>
      <div className="wall2" onMouseEnter={handleCollision}></div>
      <div className="wall3" onMouseEnter={handleCollision}></div>
      <div className="wall4" onMouseEnter={handleCollision}></div>
      <div className="wall5" onMouseEnter={handleCollision}></div>
      <div className="wall6" onMouseEnter={handleCollision}></div>
      <div className="finish" onMouseEnter={Win}></div>
      {gameOver && (
        <div className="screamer">
          You Lose
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          width: "20px",
          height: "20px",
          backgroundColor: "blue",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)"
        }}
      />
    </div>
  );
};

export default Maze;

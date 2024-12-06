import React, { useState } from "react";
import "./Maze.css";

const Maze = () => {
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  // Fonction déclenchée si le joueur touche un mur
  const handleCollision = () => {
    setGameOver(true);
  };



  const handleStart = () => {
    setStarted(true);
  }

  const Win = () => {
    alert("You win!");
  }

  const handleHome = () => {
    alert("You left!");
  }

  return (
    <div className="maze_game">
      {!started &&
        <div className="container_start">
          <button onClick={handleStart}>Clique moi</button>
          <div class="instructions">
            <h1>Bloup bloup***</h1>
            <h2>Va sauver le poisson qui est coincé dans le labyrinthe !</h2>
            <h2>Pour cela, ne touche pas les murs de déchets !</h2>
            <h2>Lors du clique, attend avant de bouger ta souris.</h2>
          </div>
        </div>
      }
      {started &&
        <div className="container_maze" onMouseLeave={handleCollision}>
          <div className="wall zero" onMouseEnter={handleCollision}></div>
          <div className="wall one" onMouseEnter={handleCollision}></div>
          <div className="wall two" onMouseEnter={handleCollision}></div>
          <div className="wall three" onMouseEnter={handleCollision}></div>
          <div className="wall four" onMouseEnter={handleCollision}></div>
          <div className="wall five" onMouseEnter={handleCollision}></div>
          <div className="wall six" onMouseEnter={handleCollision}></div>
          <div className="wall seven" onMouseEnter={handleCollision}></div>
          <div className="wall eight" onMouseEnter={handleCollision}></div>
          <div className="wall nine" onMouseEnter={handleCollision}></div>
          <div className="wall ten" onMouseEnter={handleCollision}></div>
          <div className="wall eleven" onMouseEnter={handleCollision}></div>
          <div className="wall twelve" onMouseEnter={handleCollision}></div>
          <div className="wall thirteen" onMouseEnter={handleCollision}></div>
          <div className="finish" onMouseEnter={Win}></div>
          {gameOver && (
            <div className="screamer">
              <h1>Tu as perdu :|</h1>
              <img src={require("../assets/fish-turn-cursed.gif")} alt="You Lose" />
              <button className="btn_home" onClick={handleHome}>Retour en arrière</button>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Maze;

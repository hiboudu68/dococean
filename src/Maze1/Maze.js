import React, { useState } from "react";
import Fish from "../assets/fish-turn-cursed.gif";

const Maze1 = ({ onWin }) => {
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
    onWin("spot3", "victory");
  }

  const handleHome = () => {
    onWin("spot3", "looser");
  }

  return (
    <div className="maze_game one">
      {!started &&
        <div className="container_start">
          <button onClick={handleStart}>Clique moi</button>
          <div class="instructions">
            <h1>Bloup bloup***</h1>
            <h2>Va sauver le poisson qui est coincé dans le labyrinthe !</h2>
            <h2>Pour cela, ne touche pas les murs de déchets !</h2>
            <h2>Lors du clique, attend avant de bouger ta souris.</h2>
            <br/>
            <br/>
            <article>
              <header>
                <h1>La Vessie des Océans : Attention à la Montée des Eaux ! 💧🌊</h1>
              </header>
              <section>
                <p>
                  Imagine que ta vessie déborde et que tu n’arrives plus à la contrôler : ça peut vite devenir un gros problème !
                  Pour les océans, c’est un peu la même chose avec la montée des eaux. Les océans se comportent comme une immense vessie qui, avec le réchauffement climatique, déborde de plus en plus à cause de la fonte des glaces et de l’expansion de l’eau chaude. 🧊🌡️
                </p>
              </section>
              <section>
                <p>
                  Quand l’eau monte, elle envahit les terres, mettant en danger des millions de personnes vivant près des côtes.
                  Les plages disparaissent, les maisons sont inondées, et même des îles entières risquent de se retrouver sous l’eau. 🏝️💔
                </p>
              </section>
              <section>
                <p>
                  Et ce n’est pas tout : la montée des eaux perturbe aussi les écosystèmes marins. Certaines espèces perdent leurs habitats,
                  et les écosystèmes côtiers, comme les mangroves et les coraux, peinent à s’adapter. 🐠🌊
                </p>
              </section>
              <footer>
                <p>
                  Mais bonne nouvelle : on peut limiter cette montée en réduisant les émissions de gaz à effet de serre et en protégeant nos océans.
                  Parce que, tout comme ta vessie, il vaut mieux éviter de surcharger les océans pour garder la planète en équilibre ! 💙💧
                </p>
              </footer>
            </article>
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
              <button className="btn_home" onClick={handleHome}>Retour en arrière</button>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Maze1;

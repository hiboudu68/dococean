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
    onWin("spot2", "victory");
  }

  const handleHome = () => {
    onWin("spot2", "looser");
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
            <br />
            <br />
            <article>
              <header>
                <h1>Le Cœur et les Vaisseaux des Océans : Les Courants Marins, Battements de Vie ! ❤️🌊</h1>
              </header>
              <section>
                <p>
                  Imagine que ton cœur et tes vaisseaux sanguins s’arrêtent de fonctionner : ton corps ne pourrait plus vivre.
                  Pour les océans, leur système circulatoire, ce sont les courants marins ! Ces immenses mouvements d’eau chaude et froide
                  agissent comme un réseau de vaisseaux, transportant la chaleur, l’oxygène et les nutriments, un peu comme ton sang transporte ce dont ton corps a besoin pour fonctionner. 🌍🌬️
                </p>
              </section>
              <section>
                <p>
                  Le cœur des océans, c’est le mélange subtil entre les eaux chaudes des tropiques et les eaux froides des pôles.
                  Ces courants permettent de maintenir un équilibre vital pour la planète : ils régulent le climat, nourrissent la vie marine
                  et influencent même les saisons. 🐋✨
                </p>
              </section>
              <section>
                <p>
                  Mais aujourd’hui, ce « cœur océanique » est en danger. Avec le réchauffement climatique, les glaciers fondent
                  et libèrent de grandes quantités d’eau douce, perturbant ces courants. Résultat ? Certaines zones deviennent trop chaudes,
                  d’autres trop froides, et la planète tout entière est déséquilibrée. 🌡️❄️
                </p>
              </section>
              <footer>
                <p>
                  Si les courants marins ralentissent ou s’arrêtent, c’est comme si le cœur des océans cessait de battre : c’est la vie sur Terre qui serait menacée.
                  Alors, protégeons notre planète pour que ce système circulatoire continue de pomper l’équilibre et la vie dans nos océans et au-delà ! ❤️🌊
                </p>
              </footer>
            </article>
          </div>
        </div>
      }
      {started &&
        <div className="container_maze one" onMouseLeave={handleCollision}>
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

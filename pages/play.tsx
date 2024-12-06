import React, { useState } from "react";
import { useRouter } from "next/router";

export default function PlayersCarousel() {
  const router = useRouter();

  const players = [
    { name: "Sabrina", image: "/photo/sabrina.png" },
    { name: "Aude", image: "/photo/aude.png" },
    { name: "Charly", image: "/photo/charly.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPlayer = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % players.length);
  };

  const prevPlayer = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + players.length) % players.length
    );
  };

  return (
    <section className="carousel-container">
      <button onClick={() => router.push("/")} className="back-button">
        Accueil
      </button>
      <h2 className="title">Choisissez votre joueur</h2>
      <div className="carousel-content">
        <div className="player-info">
          <h2>{players[currentIndex].name}</h2>
        </div>

        <div className="carousel-images">
          <button onClick={prevPlayer} className="arrow-button left" />
          <img
            src={players[currentIndex].image}
            alt={players[currentIndex].name}
            className="player-image"
          />
          <button onClick={nextPlayer} className="arrow-button right" />
        </div>

        <button className="validate-button">Valider</button>
      </div>
    </section>
  );
}

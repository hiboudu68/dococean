import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Source() {
  const router = useRouter();
  const [credit, setCredit] = useState(false);
  const [cgu, setCgu] = useState(false);

  const handleCredit = () => setCredit(true);
  const handleCgu = () => setCgu(true);
  const handleRevenir = () => {
    setCredit(false);
    setCgu(false);
  };
  const handleRevenirCredits = () => {
    setCgu(false);
    setCredit(true);
  };

  return (
    <div className="source-page">
      {!credit && !cgu && (
        <div className="source-buttons">
          <button onClick={handleCredit} className="source-button">
            Crédits
          </button>
          <button onClick={handleCgu} className="source-button">
            CGU
          </button>
        </div>
      )}

      {credit && (
        <div className="source-content">
          <h1 className="source-title">Crédits</h1>
          <p className="source-description">
            Les images proviennent de diverses sources. Merci aux auteurs :
          </p>
          <ol className="source-credits-list">
            <li>
              Images des bouteilles :
              <ul className="source-credits">
                <li>
                  <a
                    href="https://fr.vecteezy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vecteezy
                  </a>
                </li>
                <li>
                  <a
                    href="https://pngall.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pngall
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Sac plastique :
              <ul className="source-credits">
                <li>
                  <a
                    href="https://pngimg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pngimg
                  </a>
                </li>
                <li>
                  <a
                    href="https://wallpapers.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wallpapers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Batteries :
              <ul className="source-credits">
                <li>
                  <a
                    href="https://istockphoto.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iStockPhoto
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Océans :
              <ul className="source-credits">
                <li>
                  <a
                    href="https://greenpeace.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Greenpeace
                  </a>
                </li>
                <li>
                  <a
                    href="https://wwf.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WWF
                  </a>
                </li>
              </ul>
            </li>
          </ol>
          <div className="source-navigation-buttons">
            <button onClick={handleRevenir} className="source-back-button">
              Revenir
            </button>
          </div>
        </div>
      )}

      {cgu && (
        <div className="source-content">
          <h1 className="source-title">
            Conditions Générales d'Utilisation (CGU)
          </h1>
          <p className="source-date">Dernière mise à jour : 6 décembre 2024</p>
          <p className="source-description">
            Bienvenue dans Dococean, un jeu éducatif pour sensibiliser au
            changement climatique et la préservation des océans.
          </p>

          <h2 className="source-subtitle">1. Objet</h2>
          <p className="source-paragraph">
            Le jeu Dococean est une application ludique et éducative.
          </p>

          <h2 className="source-subtitle">2. Accès et utilisation</h2>
          <ul className="source-list">
            <li>
              <strong>Âge minimum :</strong> Pour tous, enfants sous 13 ans
              doivent être accompagnés.
            </li>
            <li>
              <strong>Conditions d'utilisation :</strong> Utilisation
              personnelle et respect des lois.
            </li>
            <li>
              <strong>Mise à jour et interruption :</strong> Maintenance et
              modifications possibles.
            </li>
          </ul>

          <h2 className="source-subtitle">3. Propriété intellectuelle</h2>
          <ul className="source-list">
            <li>
              <strong>Utilisation limitée :</strong> Reproduction interdite sans
              autorisation.
            </li>
            <li>
              <strong>Crédits :</strong> Mentions des sources dans le jeu.
            </li>
          </ul>

          <h2 className="source-subtitle">4. Responsabilité</h2>
          <ul className="source-list">
            <li>
              <strong>Exactitude des informations :</strong> À titre informatif.
            </li>
            <li>
              <strong>Utilisation du jeu :</strong> Utilisation à vos risques.
            </li>
          </ul>

          <h2 className="source-subtitle">5. Données personnelles</h2>
          <ul className="source-list">
            <li>
              <strong>Absence de collecte :</strong> Aucune donnée personnelle
              collectée.
            </li>
            <li>
              <strong>Cookies :</strong> Aucun cookie ou traceur utilisé.
            </li>
          </ul>

          <h2 className="source-subtitle">6. Modifications des CGU</h2>
          <p className="source-paragraph">
            Les CGU peuvent être modifiées. Vous serez informés des changements.
          </p>

          <p className="source-footer">
            Merci de participer à cette aventure éducative !
          </p>
          <button onClick={handleRevenir} className="source-back-button">
            Revenir
          </button>
        </div>
      )}
      <button
        className="source-home-button-fixed"
        onClick={() => router.push("/")}
      >
        Retour à l'accueil
      </button>
    </div>
  );
}

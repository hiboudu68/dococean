import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  
  const [credit, setCredit] = useState(false);
  const [cgu, setCgu] = useState(false);

  const handleCredit = () => {
    setCredit(true)
  }

  const handleCgu = () => {
    setCgu(true)
  }

  const handleRevenir = () => {
    setCredit(false)
    setCgu(false)
  }

  return (
    <div className="App-header">
      {!credit && !cgu &&
        <>
          <button onClick={handleCredit}>
            Credit
          </button>
          <button onClick={handleCgu}>
            CGU
          </button>
        </>
      }

      {credit &&
        <div>
          <h1>Conditions Générales d’Utilisation (CGU)</h1>
          <p>Dernière mise à jour : 6 décembre 2024 </p>

          <p>Bienvenue dans Dococean, un jeu éducatif conçu pour sensibiliser le public à l'impact du changement climatique sur les océans et la santé humaine. En accédant et en utilisant ce jeu, vous acceptez les présentes Conditions Générales d’Utilisation. Veuillez les lire attentivement.</p>

          <h2>1. Objet</h2>
         <p> Le jeu Dococean est une application ludique et éducative destinée à sensibiliser les utilisateurs à des problématiques environnementales. Il est accessible gratuitement (ou mentionner le modèle payant si applicable) à travers [URL / plateforme].</p>

          <h2>2. Accès et utilisation</h2>
          <ul>
            <li> <strong>Âge minimum :</strong> Ce jeu est destiné à tous les publics, mais les enfants de moins de 13 ans doivent être accompagnés d’un parent ou tuteur pour l’utiliser.</li>
            <li> <strong>Conditions d’utilisation :</strong> Vous vous engagez à utiliser le jeu uniquement à des fins personnelles, non commerciales, et dans le respect des lois en vigueur.</li>
            <li> <strong>Mise à jour et interruption :</strong> Nous nous réservons le droit de modifier ou d’interrompre tout ou partie du jeu à tout moment pour maintenance, amélioration ou autre raison.</li>
          </ul>

          <h2>3. Propriété intellectuelle</h2>
          <ul>
            <li> <strong>Utilisation limitée :</strong> Toute reproduction, distribution ou modification des éléments du jeu sans autorisation expresse est interdite.</li>
            <li> <strong>Crédits :</strong> Si le jeu utilise des éléments tiers (images ou musiques libres de droits), une section dédiée dans le jeu mentionnera leurs auteurs et licences.</li>
          </ul>

          <h2>4. Responsabilité</h2>
          <ul>
            <li><strong>Exactitude des informations :</strong>Bien que le jeu vise à fournir des informations éducatives basées sur des faits scientifiques, celles-ci sont fournies à titre informatif et ne remplacent pas des sources académiques ou professionnelles.</li>
            <li><strong>Utilisation du jeu :</strong>Vous utilisez le jeu à vos propres risques. Nous ne pouvons être tenus responsables de tout dommage matériel ou immatériel résultant de son utilisation.</li>
          </ul>

          <h2>5. Données personnelles</h2>
          <ul>
            <li><strong>Absence de collecte de données :</strong>Le jeu Dococean ne collecte ni ne stocke aucune donnée personnelle.</li>
            <li><strong>Cookies et traceurs :</strong>Aucun cookie ou traceur n’est utilisé dans le cadre du jeu.</li>
          </ul>

          <h2>6. Modifications des CGU</h2>
          <p>Les présentes CGU peuvent être modifiées à tout moment. Les utilisateurs seront informés des changements par une notification sur le site ou dans le jeu.</p>

          <p>En jouant à Dococean, vous acceptez ces conditions. Merci de participer à cette aventure éducative et de contribuer à la préservation de notre belle planète bleue ! 🌊💙</p>
          <button onClick={handleRevenir}>
            Revenir
          </button>
        </div>
      }
      {cgu &&
        <div>
          <h1>Crédits</h1>
          <p>Les images utilisées dans Dococean proviennent de diverses sources en ligne. Nous remercions chaleureusement les auteurs pour leur contribution. Voici les références :</p>
          <ol>
            <li>Image des bouteilles</li>
            <ul>
              <li><a href="https://fr.vecteezy.com">fr.vecteezy.com</a></li>
              <li><a href="https://pngall.com">pngall.com</a></li>
            </ul>
            <li>Sac plastique</li>
            <ul>
              <li><a href="https://fr.vecteezy.com">fr.vecteezy.com</a></li>
              <li><a href="https://pngimg.com">pngimg.com</a></li>
              <li><a href="https://wallpapers.com">wallpapers.com</a></li>
            </ul>
            <li>Batteries</li>
            <ul>
              <li><a href="https://istockphoto.com">istockphoto.com</a></li>
            </ul>

            <li>Oceans</li>
            <ul>
              <li><a href="https://americanoceans.org">americanoceans.org</a></li>
              <li><a href="https://greenpeace.com">greenpeace.com</a></li>
              <li><a href="https://wwf.fr">wwf.fr</a></li>
              <li><a href="https://nrdc.org">nrdc.org</a></li>
            </ul>

            <li>Organes</li>
            <ul>
              <li><a href="https://ici.radio-canada.ca">ici.radio-canada.ca</a></li>
              <li><a href="https://doctissimo.fr">doctissimo.fr</a></li>
              <li><a href="https://safetyhys.com">safetyhys.com</a></li>
            </ul>

            



          </ol>
          <button onClick={handleRevenir}>
            Revenir
          </button>
        </div>
      }
      

    </div>
  );
}

export default App;

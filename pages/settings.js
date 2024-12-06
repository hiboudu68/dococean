import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Settings() {
  const router = useRouter();
  const [isToggled, setIsToggled] = useState(false);

  const toggleSettings = () => setIsToggled(!isToggled);

  const handleSubmit = () => {
    alert(`Paramètre ${isToggled ? "activé" : "désactivé"}`);
  };

  return (
    <section className="settings-container">
      <button onClick={() => router.push("/")} className="back-button">
        Accueil
      </button>

      <div className="settings-content">
        <h2>Paramètres</h2>

        <div className="toggle-container">
          <span className="toggle-label">Activer le paramètre</span>
          <div
            onClick={toggleSettings}
            className={`toggle-switch ${isToggled ? "active" : ""}`}
          >
            <div className={`toggle-circle ${isToggled ? "active" : ""}`}></div>
          </div>
        </div>

        <button onClick={handleSubmit} className="validate-button">
          Valider
        </button>
      </div>
    </section>
  );
}

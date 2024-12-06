import React from "react";
import { useRouter } from "next/router";

export default function Info() {
  const router = useRouter();
  return (
    <section
      style={{
        backgroundImage: "url('/photo/RULES.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{ fontWeight: "bold", color: "black", marginBottom: "30px" }}
        >
          Informations Importantes{" "}
        </h1>
        <p style={{ color: "black" }}>
          Bienvenue dans le monde de DocOcean ! Vous êtes sur le point de
          plonger dans une aventure unique où la science rencontre le jeu pour
          sensibiliser à l'impact du changement climatique sur nos océans… et
          notre santé. Dans DocOcean, vous incarnez un expert chargé de
          diagnostiquer les "symptômes" des océans malades, représentés par un
          corps humain. À chaque bouton, découvrez comment les transformations
          des océans influencent le climat, la biodiversité, et même notre
          propre santé. Attention ! Comme dans un jeu de Docteur Maboule, la
          précision sera essentielle pour éviter de "blesser" votre patient...
          Votre mission : comprendre, agir et peut-être sauver ce qui peut
          encore l’être ! Saurez-vous réparer les dégâts et devenir le héros des
          océans ?
        </p>
        <p style={{ color: "black", marginTop: "20px" }}>
          Bonne chance, et que votre quête vous inspire à protéger notre belle
          planète bleue{" "}
        </p>
        <button
          onClick={() => router.push("/")}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#ffde0a",
            color: "black",
            border: "3px solid #fcca01",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Retour à l'accueil
        </button>
      </div>
    </section>
  );
}

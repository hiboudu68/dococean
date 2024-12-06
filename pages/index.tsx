import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <section
      className="border page"
      style={{
        backgroundImage: "url(/photo/HOME.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        margin: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={() => router.push("/settings")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          title="Paramètres"
        >
          <img
            src="/photo/Para.png"
            alt="Paramètres"
            style={{ width: "40px", height: "40px" }}
          />
        </button>
        <button
          onClick={() => router.push("/info")} // Utiliser router.push() pour naviguer
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          title="Infos"
        >
          <img
            src="/photo/Info.png"
            alt="Infos"
            style={{ width: "40px", height: "40px" }}
          />
        </button>

        <button
          onClick={() => router.push("/source")} // Utiliser router.push() pour naviguer
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          title="Infos"
        >
          <img
            src="/photo/carotte.png"
            alt="Infos"
            style={{ width: "40px", height: "40px" }}
          />
        </button>
      </div>

      <div className="play-button-container">
        <button className="play-button" onClick={() => router.push("/play")}>
          Play
        </button>
      </div>
    </section>
  );
}

import React from "react";

export default function Home() {
  return (
    <section
      className="border page"
      style={{
        backgroundImage: "url(/photo/HOME.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        margin: 0,
      }}
    >
      <div className="play-button-container">
        <button className="play-button">Play</button>
      </div>
    </section>
  );
}

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PlayerPage = () => {
  const router = useRouter();
  const { name } = router.query;


  const [playerImage, setPlayerImage] = useState<string>("");

  useEffect(() => {
    if (name) {
      if (name === "Sabrina") {
        setPlayerImage("/photo/CorpsSabrina.png");
      } else if (name === "Aude") {
        setPlayerImage("/photo/CorpsAude.png");
      } else if (name === "Charly") {
        setPlayerImage("/photo/CorpsCharly.png");
      }
    }
  }, [name]);

  const handleClickSpot = (spot: string) => {
    console.log(`Clicked on spot: ${spot}`);
    // Handle spot click logic here
  };

  return (
    <section
      style={{
        backgroundImage: "url('/photo/setting.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <header
        style={{
          position: "absolute",
          top: "-16px",
          left: "20px",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/photo/Logo.png"
          alt="Logo"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
          }}
        />
      </header>

      <div
        style={{
          marginTop: "150px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Votre joueur : {name}
        </h1>

        {playerImage && (
          <img
            src={playerImage}
            alt={name as string}
            style={{
              width: "600px",
              height: "600px",
              objectFit: "contain",
              marginBottom: "30px",
              marginTop: "-50px",
            }}
          />
        )}
        <div
        onClick={() => handleClickSpot('spot1')}
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
            borderRadius: '50%',
            cursor: 'pointer',
            filter: 'blur(2px)'
          }}>
        </div>
        <div onClick={() => handleClickSpot('spot2')}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
            borderRadius: '50%',
            cursor: 'pointer',
            filter: 'blur(2px)'
          }}>
        </div>
        <div onClick={() => handleClickSpot('spot3')}
          style={{
            position: 'absolute',
            top: '53%',
            left: '49%',
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
            borderRadius: '50%',
            cursor: 'pointer',
            filter: 'blur(2px)'
          }}>
        </div>
      </div>
    </section>
  );
};

export default PlayerPage;

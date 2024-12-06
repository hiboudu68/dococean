import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Maze from "../../src/Maze/Maze";
import ThreeScene from "../../src/3d"

const PlayerPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const [levelDone, setLevelDone] = useState<number>(0);

  const [playerImage, setPlayerImage] = useState<string>("");

  const [spot1done, setSpot1done] = useState<boolean>(false);
  const [spot2done, setSpot2done] = useState<boolean>(false);
  const [spot3done, setSpot3done] = useState<boolean>(false);
  const [spot4done, setSpot4done] = useState<boolean>(false);


  const [playing, setPlaying] = useState<boolean>(false);
  const [spot1playing, setSpot1playing] = useState<boolean>(false);
  const [spot2playing, setSpot2playing] = useState<boolean>(false);
  const [spot3playing, setSpot3playing] = useState<boolean>(false);
  const [spot4playing, setSpot4playing] = useState<boolean>(false);

  const defaultBg = "url('/photo/setting.png')";

  const [currentBg, setCurrentBg] = useState<string>("url('/photo/setting.png')");

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

  const handleSpotWin = (spot: string, victory: string) => {
    setPlaying(false);
    if (spot === 'spot1') {
      if (victory === 'victory') {
        setSpot1done(true);
        setLevelDone(levelDone + 1);
      }
      setSpot1playing(false);
    }
    if (spot === 'spot2') {
      setSpot2done(true);
      setSpot2playing(false);
    }
    if (spot === 'spot3') {
      setSpot3done(true);
      setSpot3playing(false);
    }
    if (spot === 'spot4') {
      if(victory === 'victory'){
        setSpot4done(true);
        setLevelDone(levelDone + 1);
      }
      setSpot4playing(false);
    }
    setCurrentBg(defaultBg);
  }



  const handleClickSpot = (spot: string) => {
    if (spot === 'spot1') {
      setPlaying(true);
      setSpot1playing(true);
      setCurrentBg("url('/photo/vessie.png')");
    }
    if (spot === 'spot2') {
      setPlaying(true);
      setSpot2playing(true);
    }
    if (spot === 'spot3') {
      setPlaying(true);
      setSpot3playing(true);
    }
    if (spot === 'spot4') {
      setPlaying(true);
      setSpot4playing(true);
    }
  }

  return (
    <section
      style={{
        backgroundImage: currentBg,
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
      {!playing &&
        <div>
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
            <Link href="/">
              <img
                src="/photo/Logo.png"
                alt="Logo"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </Link>
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
              Votre joueur : {name}<br />


            </h1>

            <h1 style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "30px",
            }}>
              Score : {levelDone} / 4
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
          </div>
          {!spot1done &&
            <div
              onClick={() => handleClickSpot('spot1')}
              style={{
                position: 'absolute',
                top: '65%',
                left: '48%',
                width: '20px',
                height: '20px',
                backgroundColor: 'red',
                borderRadius: '50%',
                cursor: 'pointer',
                filter: 'blur(2px)'
              }}>
            </div>
          }
          {!spot2done &&
            <div
              onClick={() => handleClickSpot('spot2')}
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
          }
          {!spot3done &&
            <div
              onClick={() => handleClickSpot('spot3')}
              style={{
                position: 'absolute',
                top: '53%',
                left: '48%',
                width: '20px',
                height: '20px',
                backgroundColor: 'red',
                borderRadius: '50%',
                cursor: 'pointer',
                filter: 'blur(2px)'
              }}>
            </div>
          }
          {!spot4done &&
            <div
              onClick={() => handleClickSpot('spot4')}
              style={{
                position: 'absolute',
                top: '36%',
                left: '49%',
                width: '20px',
                height: '20px',
                backgroundColor: 'red',
                borderRadius: '50%',
                cursor: 'pointer',
                filter: 'blur(2px)'
              }}>
            </div>
          }
        </div>}
      {spot1playing && <Maze onWin={handleSpotWin} />
      }
      {spot4playing && <ThreeScene onWin={handleSpotWin} />
      }
    </section>
  );
};

export default PlayerPage;
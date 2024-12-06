import coeur from "./assets/heart.png";
import ClickImg from "./ClickImgmlkpdsjsj";
import React, { useState } from "react";

function SpamClickkjndomp({ onWin }) {
    const [nbBatteryLeft, setNbBatteryLeft] = useState(3);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleEnd = () => {
        setNbBatteryLeft(nbBatteryLeft - 1);
        if (nbBatteryLeft === 1) {
            onWin("spot3", "victory");
        }
    }

    return (
        
        <div style={{ height: '100vh', backgroundColor: '#55AAC9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {!isPlaying && 
            <>
            <article>
                <header>
                    <h1>Les Phytoplanctons : Les Poumons Cachés de la Planète ! 🌊🌿</h1>
                </header>
                <section>
                    <p>
                        Imagine un minuscule super-héros flottant dans l’océan, invisible à l’œil nu mais incroyablement puissant : c’est le phytoplancton !
                        Ces petites plantes marines sont les véritables poumons de notre planète. Elles produisent plus de 50 % de l’oxygène que nous respirons —
                        oui, plus que toutes les forêts du monde réunies ! 🌬️✨
                    </p>
                </section>
                <section>
                    <p>
                        Mais ce n’est pas tout. Les phytoplanctons sont la base de la chaîne alimentaire dans les océans. Sans eux, les poissons,
                        les baleines et même les tortues auraient du mal à trouver à manger. Ils absorbent aussi du CO₂, aidant notre planète à respirer face au changement climatique. 🌍❤️
                    </p>
                </section>
                <section>
                    <p>
                        Le problème ? Les océans se réchauffent et deviennent plus acides à cause du changement climatique,
                        et les phytoplanctons peinent à survivre. Si ces super-héros disparaissent, c’est tout l’écosystème marin,
                        et même l’air que nous respirons, qui est en danger. 🆘
                    </p>
                </section>
                <footer>
                    <p>
                        Alors, prenons soin de nos océans, pour nos petits poumons invisibles et pour nous tous ! 💙
                    </p>
                </footer>
            </article>
            <button onClick={() => setIsPlaying(true)}>Spam Click</button>
            </>
            }
            {isPlaying &&
            <>
            <h1 style={{fontFamily: 'Jolly Lodger, sans-serif', fontSize: '50px'}}>Enlever les batteries</h1>
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: "relative", backgroundImage: `url(${coeur})`, width: '1700px', height: '900px', backgroundSize: 'cover', display: "flex", flexDirection: "row" }}>
                    <ClickImg img={"gbatterie"} width={400} top={'50%'} left={'60%'} onEnd={handleEnd}/>
                    <ClickImg img={"pbatterie"} width={300} top={'65%'} left={'40%'} onEnd={handleEnd}/>
                    <ClickImg img={"gbatterie"} width={200} top={'30%'} left={'43%'} onEnd={handleEnd}/>
                </div>
            </div>
            </>
            }
        </div>
    );
}
export default SpamClickkjndomp;
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useRef, useState } from "react";

export default function CookieCauchemar() {
    const router = useRouter();

    const [cookie, setCookie] = useState(0);

    const [qteGoal, setQteGoal] = useState(45 + Math.random() * (95 - 45));
    const [previousQteGoal, setPreviousQteGoal] = useState(45 + Math.random() * (95 - 45));

    const [count, setCount] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Utiliser useRef pour stocker l'ID de l'intervalle

    const startCookieQTE = () => {
        const min = 45;
        const max = 95; // taille de l'élément: 5%

        let progressBar: HTMLElement | null = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.display = 'block';
        }

        setPreviousQteGoal(qteGoal);
        setQteGoal(45 + Math.random() * (95 - 45));

        let progressBarGoal: HTMLElement | null = document.querySelector('.progress-bar-goal');
        if (progressBarGoal) {
            progressBarGoal.style.left = qteGoal + "%";
        }

        let progressBarProgress: HTMLElement | null = document.querySelector('.progress-bar-progess');
        if (progressBarProgress && !intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = prevCount + 1;

                    // Mettre à jour la barre de progression
                    if (progressBarProgress) {
                        progressBarProgress.style.width = newCount + "%";
                    }

                    // Stopper l'intervalle une fois la limite atteinte
                    if (newCount >= 100) {
                        clearInterval(intervalRef.current!);
                        intervalRef.current = null; // Réinitialisation pour permettre un nouveau démarrage
                    }

                    return newCount;
                });
            }, 20); // Ajustez la durée de l'intervalle selon vos besoins
        }
    };

    const stopCookieQTE = () => {
        if (Math.abs(previousQteGoal - count) <= 5) {
            let choice = Math.round(Math.random());
            console.log(choice)
            switch (choice) {
                case 0:
                    if (confirm("Voulez vous ne pas comptabiliser le cookie?")) {
                        let progressBar: HTMLElement | null = document.querySelector('.progress-bar');
                        if (progressBar) {
                            progressBar.style.display = 'none';
                        }
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null; // Nettoyage pour éviter des fuites
                        }
                        setCount(0);
                        return;
                    }
                    setCookie(cookie + 1);
                    break;
            
                case 1:
                    if (!confirm("Voulez vous comptabiliser le cookie?")) {
                        let progressBar: HTMLElement | null = document.querySelector('.progress-bar');
                        if (progressBar) {
                            progressBar.style.display = 'none';
                        }
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null; // Nettoyage pour éviter des fuites
                        }
                        setCount(0);
                        return;
                    }
                    
                    setCookie(cookie + 1);
                    break;
            }
            
        }

        let progressBar: HTMLElement | null = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.display = 'none';
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null; // Nettoyage pour éviter des fuites
        }
        setCount(0);
    };

    return (
        <div className="cookie-container">
            <p>
                Nombre de cookies:{cookie}
            </p>
            
            <button
                className="increment-counter"
                onMouseDown={startCookieQTE}
                onMouseUp={stopCookieQTE}>
                INCRéMENTER
            </button>
        
            <div className="progress-bar">
                <div className="progress-bar-progess"></div>
                <div className="progress-bar-goal"></div>
            </div>

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
    );
}

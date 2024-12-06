import { useSearchParams } from "next/navigation";
import React, { ReactNode, useState } from "react";

const CookieCauchemar = () => {
    const [cookie, setCookie] = useState(0);
    const [qteGoal, setQteGoal] = useState(0);
    
    const startCookieQTE = () => {
        const min = 45;
        const max = 100;
        setQteGoal(min + Math.random() * (max - min))
    }

    const stopCookieQTE = () => {

    }

    return(
        <div>
            <button
                onMouseDown={startCookieQTE}
                onMouseUp={stopCookieQTE}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "white"
                }}>
                

            </button>
        </div>
    )
}
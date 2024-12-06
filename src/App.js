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
          <p>jdshfjsgfjkewdsg</p>
          <button onClick={handleRevenir}>
            Revenir
          </button>
        </div>
      }
      {cgu &&
        <div>
          <p>rien</p>
          <button onClick={handleRevenir}>
            Revenir
          </button>
        </div>
      }
      

    </div>
  );
}

export default App;

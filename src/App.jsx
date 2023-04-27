import {useEffect, useState} from 'react'

import './App.css'
import Cards from "./Cards.jsx";

function App() {

    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    useEffect(() => {
        setBestScore(prevState => {
            if (prevState === 0) {
                return score
            } else if(prevState < score) {
                return score
            } else if (prevState >= score) {
                return prevState
            }
        })
    }, [score])
    console.log(`best score ${bestScore}`)

  return (
    <div id="container">
        <header>
            <h1>Memory card Game</h1>
            <p className={"description"}>Click a different card each time to score a point</p>
            <div className="score-holder">
                <div className="score">{`Score: ${score}`}</div>
                <div className="best-score">{`Best score: ${bestScore}`}</div>
            </div>
        </header>
        <Cards
            score={score}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}


        />



    </div>
  )
}

export default App

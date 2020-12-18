import React, {useState, useEffect} from 'react'
import Header from './Header'
import CardContainer from './CardContainer'

const GameLogic = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [newArray, setNewArray] = useState([])

    const updateScore = (e) => {
        if(newArray.includes(e.target.alt)){
            setScore(0)
            setNewArray([])
            alert('Game Over')
        } else {
            setScore(score+1)
            setNewArray((newArray) => [...newArray, e.target.alt])
        }
    }

    useEffect(() => {
        if(score > highScore){
            setHighScore(score)
        }
    },[score, highScore])

    return(
        <div>
            <Header score={score} highScore={highScore} />
            <CardContainer updateScore={updateScore} />
        </div>
    )
}

export default GameLogic
import React, {useState, useEffect} from 'react'
import Header from './Header'
import RegionSidebar from './RegionSidebar'
import MainContainer from './MainContainer'

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

    const changeContinentResetScore = () => {
        setScore(0)
    }

    useEffect(() => {
        if(score > highScore){
            setHighScore(score)
        }
    },[score, highScore])

    return(
        <div>
            <Header score={score} highScore={highScore} />
            <MainContainer score={score} 
            highScore={highScore} 
            updateScore={updateScore} 
            changeContinentResetScore={changeContinentResetScore} />
        </div>
    )
}

export default GameLogic
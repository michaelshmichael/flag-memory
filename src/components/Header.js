import React from 'react'

const Header = (props) => {
    return(
        <div className='header'>
            <div className='title'>
                <h1>Veximemory</h1>
            </div>
            <div className='scores'>
            <h2>Score: {props.score}</h2>
            <h2>High Score: {props.highScore}</h2>
            </div>
        </div>
    )
}

export default Header
import React from 'react'
import { Globe } from 'react-bootstrap-icons'

const Header = (props) => {
    return(
        <div className='header'>
            <Globe margin-top='15px'/>
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
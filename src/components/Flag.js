import React from 'react'
import '../styles/card.css'

const Flag = (props) => {
    return(
        <div className='card'>
            <img className='flag-image' 
            src={props.flag}
            alt={props.country}
            onClick={e => props.updateScore(e)} 
            ></img>
        </div>
    )
}

export default Flag
import React from 'react';

const CardTemplate = (props) => {
    return(
        <div className='card' id={props.country} onClick={e => props.updateScore(e)}>
            <img className='flag-image' 
            src={props.flag}
            alt={props.country}
            ></img>
            <p className='country'>{props.country}</p>
        </div>
    )
}

export default CardTemplate;

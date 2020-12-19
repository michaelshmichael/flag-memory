import React from 'react'
import CardTemplate from './CardTemplate'
import uniqid from 'uniqid'

const MainContainer = (props) => {
    const {cards, updateScore} = props 
    return(
        <div className='main-body-container'>
            <div className='flag-container'>
                {cards.map((card) => (
                    <CardTemplate key={uniqid()} 
                    flag={card.src} 
                    country={card.country} 
                    updateScore={updateScore}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainContainer
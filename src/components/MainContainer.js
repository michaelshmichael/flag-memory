import React, {useEffect, useState} from 'react'
import RegionSidebar from './RegionSidebar'
import Flag from './Flag'
import '../styles/card.css'
import uniqid from 'uniqid'
import ad from '../images/ad.png'
import am from '../images/am.png'
import bg from '../images/bg.png'
import bv from '../images/bv.png'
import by from '../images/by.png'
import ci from '../images/ci.png'
import az from '../images/az.png'
import at from '../images/at.png'
import al from '../images/al.png'

const MainContainer = (props) => {
    const {score, highScore} = props 
    const initialCountries = [
        {src: ad, country: 'Andorra'},
        {src: am, country: 'Armenia'},
        {src: bg, country: 'Bulgaria'},
        {src: at, country: 'Austria'},
        {src: al, country: 'Albania'},
        {src: ci, country: 'Ireland'},
        {src: bv, country: 'Norway'},
        {src: by, country: 'Belarus'},
        {src: az, country: 'Azerbaijan'}
    ]
    const [cards, setCards] = useState(initialCountries)

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const createRandomIndex = () => {
        return Math.floor(Math.random() * 7);
    }

    useEffect(() => {
        //need a way to check if the array contains this element already and gives unique flags
        let newCards = [initialCountries[createRandomIndex()], 
        initialCountries[createRandomIndex()],
        initialCountries[createRandomIndex()],
        initialCountries[createRandomIndex()],
        initialCountries[createRandomIndex()],
        initialCountries[createRandomIndex()]]

        shuffle(newCards)
        setCards(newCards)
    }, [score, highScore])

    return(
        <div className='main-body-container'>
        <RegionSidebar />
            <div className='flag-container'>
                {cards.map((card) => (
                    <Flag key={uniqid()} 
                    flag={card.src} 
                    country={card.country} 
                    updateScore={props.updateScore}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainContainer
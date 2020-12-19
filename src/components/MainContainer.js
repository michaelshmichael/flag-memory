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

import bf from '../images/bf.png'
import bw from '../images/bw.png'
import cd from '../images/cd.png'
import cm from '../images/cm.png'
import dj from '../images/dj.png'
import er from '../images/er.png'
import et from '../images/et.png'
import ga from '../images/ga.png'
import mz from '../images/mz.png'
import na from '../images/na.png'
import sn from '../images/sn.png'
import so from '../images/so.png'


const MainContainer = (props) => {
    const {score, highScore} = props 
    const europeanCountries = [
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
    const africanCountries = [
        {src: bf, country: 'Burkina Faso'},
        {src: bw, country: 'Botswana'},
        {src: cd, country: 'Congo'},
        {src: cm, country: 'Cameroon'},
        {src: dj, country: 'Djibouti'},
        {src: er, country: 'Eritrea'},
        {src: et, country: 'Ethiopia'},
        {src: ga, country: 'Gabon'},
        {src: mz, country: 'Mozambique'},
        {src: na, country: 'Namibia'},
        {src: sn, country: 'Senegal'},
        {src: so, country: 'Somalia'}
    ]
    const [selectedContinent, setSelectedContinent] = useState(europeanCountries)
    const [cards, setCards] = useState(selectedContinent)
    
    
    const createRandomIndex = () => {
        return Math.floor(Math.random() * 7);
    }

    const makeRandomArray = () => {
        let randomCards = []
        while(randomCards.length < 6) {
            let randomIndex = createRandomIndex()
            let randomCard = selectedContinent[randomIndex]
            if(randomCards.includes(randomCard) === false){
                randomCards.push(randomCard)
            }
        }
        return randomCards
    }

    useEffect(() => {
        let randomCards = makeRandomArray()
        setCards(randomCards)
    }, [score, highScore, selectedContinent])

    const changeContinent = (continent) => {
        // eslint-disable-next-line default-case
        switch(continent.target.id){
            case 'Africa':
                setSelectedContinent(africanCountries)
                props.changeContinentResetScore()
                break
            case 'Europe':
                setSelectedContinent(europeanCountries)
                props.changeContinentResetScore()
        }
    }

    return(
        <div className='main-body-container'>
        <RegionSidebar changeContinent={changeContinent}/>
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
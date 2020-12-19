import React, {useState, useEffect} from 'react'
import Header from './Header'
import MainContainer from './MainContainer'

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

import af from '../images/af.png'
import bn from '../images/bn.png'
import bt from '../images/bt.png'
import hk from '../images/hk.png'
import jp from '../images/jp.png'
import kg from '../images/kg.png'
import kh from '../images/kh.png'
import pk from '../images/pk.png'
import vn from '../images/vn.png'

const GameLogic = () => {
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
    const asianCountries = [
        {src: af, country: 'Afghanistan'},
        {src: bn, country: 'Brunei'},
        {src: bt, country: 'Bhutan'},
        {src: hk, country: 'Hong Kong'},
        {src: jp, country: 'Japan'},
        {src: kg, country: 'Kyrgyzstan'},
        {src: kh, country: 'Cambodia'},
        {src: pk, country: 'Pakistan'},
        {src: vn, country: 'Vietnam'}
    ]
    const [selectedContinent, setSelectedContinent] = useState(europeanCountries)
    const [cards, setCards] = useState(selectedContinent)
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
                changeContinentResetScore()
                break
            case 'Europe':
                setSelectedContinent(europeanCountries)
                changeContinentResetScore()
                break
            case 'Asia':
                setSelectedContinent(asianCountries)
                changeContinentResetScore()
        }
    }

    return(
        <div>
            <Header score={score} 
                highScore={highScore} 
                changeContinent={changeContinent}/>
            <MainContainer score={score}
                cards={cards} 
                highScore={highScore} 
                updateScore={updateScore} 
                changeContinentResetScore={changeContinentResetScore} />
        </div>
    )
}

export default GameLogic
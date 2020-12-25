import React, {useState, useEffect} from 'react'
import Header from './Header'
import CardContainer from './CardContainer'

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

const MainContainer = () => {
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

    const [selectedContinent, setSelectedContinent] = useState(europeanCountries);
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [oldArray, setOldArray] = useState(selectedContinent);
    const [newArray, setNewArray] = useState([]);


    const updateScore = (e) => {
        console.log(e.target.id)
        if(newArray.includes(e.target.id)){
            console.log(e.target.id)
            setScore(0)
            setNewArray([])
            alert('Game Over')
        } else {
            setScore(score+1)
            setNewArray((newArray) => [...newArray, e.target.id])
            setOldArray(oldArray.filter(element => element.country !== e.target.id))
            console.log(oldArray)
        }
    }

    const changeContinentResetScore = () => {
        setScore(0)
    }

    const createRandomIndex = () => {
        return Math.floor(Math.random() * selectedContinent.length);
    }

    const makeRandomArray = () => {
        let randomCards = []
        
        while(randomCards.length < 5) {
            let randomIndex = createRandomIndex()
            let randomCard = selectedContinent[randomIndex]
            if(randomCards.includes(randomCard) === false){
                randomCards.push(randomCard)
            }
        }

        let randomIndex = Math.floor(Math.random() * oldArray.length);
        let randomInsertionIndex = Math.floor(Math.random() * 6);
        let unclickedCard = oldArray[randomIndex];

        if(randomCards.includes(unclickedCard) === false){
            randomCards.splice(randomInsertionIndex , 0 , unclickedCard);
            console.log('A')
        } else {
            console.log('B')
            makeRandomArray();
        }

        return randomCards
    }

    useEffect(() => {
        //Updates Score
        if(score > highScore){
            setHighScore(score)
        }
        //Reshuffles cards
        let randomCards = makeRandomArray()
        setCards(randomCards)
    }, [score, highScore, selectedContinent])

    const changeContinent = (continent) => {
        // eslint-disable-next-line default-case
        switch(continent.target.id){
            case 'Africa':
                setSelectedContinent(africanCountries)
                setOldArray(africanCountries)
                changeContinentResetScore()
                break
            case 'Europe':
                setSelectedContinent(europeanCountries)
                setOldArray(europeanCountries)
                changeContinentResetScore()
                break
            case 'Asia':
                setSelectedContinent(asianCountries)
                setOldArray(asianCountries)
                changeContinentResetScore()
        }
    }

    return(
        <div>
            <Header score={score} 
                highScore={highScore} 
                changeContinent={changeContinent}/>
            <CardContainer score={score}
                cards={cards} 
                highScore={highScore} 
                updateScore={updateScore} 
                changeContinentResetScore={changeContinentResetScore} />
        </div>
    )
}

export default MainContainer;


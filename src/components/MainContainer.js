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
    const [topScore, setTopScore] = useState(8);
    const [clickedArray, setClickedArray] = useState([]);
    const [unclickedArray, setUnclickedArray] = useState(selectedContinent);
    

    const updateScore = (e) => {
        console.log(e.target.id)
            if(clickedArray.includes(e.target.id)){
                resetGameStateValues()
                alert('Game Over')
            } else {
                setScore(score+1)
                if(score === topScore){
                    // need highScore functionality here
                    resetGameStateValues()
                    alert('You won')
                } else {
                    setClickedArray((newArray) => [...newArray, e.target.id])
                    setUnclickedArray(unclickedArray.filter(element => element.country !== e.target.id))
                }
            }
    }

    const resetGameStateValues = () => {
        setScore(0)
        setClickedArray([])
        setUnclickedArray(selectedContinent)
        setCards([])
    }
    
    const changeContinentResetScore = () => {
        setScore(0)
    }

    const createRandomIndex = () => {
        return Math.floor(Math.random() * selectedContinent.length);
    }

    const generateInitialRandomArray = () => {
        let initialRandomArray = [];
        while(initialRandomArray.length < 5) {
            let randomIndex = createRandomIndex()
            let randomCard = selectedContinent[randomIndex]
            if(initialRandomArray.includes(randomCard) === false){
                initialRandomArray.push(randomCard)
            }
        }
        return initialRandomArray
    }

    const generateUnclickedCard = () => {
        let randomIndex = Math.floor(Math.random() * unclickedArray.length);
        let unclickedCard = unclickedArray[randomIndex];
        return unclickedCard;
    }; 

    const generateCombinedRandomArray = () => {
        let initialRandomArray = generateInitialRandomArray();
        let unclickedCard = generateUnclickedCard();

        while(initialRandomArray.includes(unclickedCard)){
            initialRandomArray = generateInitialRandomArray();
            unclickedCard = generateUnclickedCard();
        }
        let randomInsertionIndex = Math.floor(Math.random() * 6);
        initialRandomArray.splice(randomInsertionIndex, 0, unclickedCard)
        return initialRandomArray
    }

    useEffect(() => {
        if(score > highScore){
            setHighScore(score)
        }
        let combinedRandomArray = generateCombinedRandomArray()
        setCards(combinedRandomArray)
    }, [score, highScore, selectedContinent])

    const changeContinent = (continent) => {
        // eslint-disable-next-line default-case
        switch(continent.target.id){
            case 'Africa':
                setSelectedContinent(africanCountries)
                setUnclickedArray(africanCountries)
                changeContinentResetScore()
                setTopScore(11)
                break
            case 'Europe':
                setSelectedContinent(europeanCountries)
                setUnclickedArray(europeanCountries)
                changeContinentResetScore()
                setTopScore(8)
                break
            case 'Asia':
                setSelectedContinent(asianCountries)
                setUnclickedArray(asianCountries)
                changeContinentResetScore()
                setTopScore(8)
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
                updateScore={updateScore}/>
        </div>
    )
}

export default MainContainer;


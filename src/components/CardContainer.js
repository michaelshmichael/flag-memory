import React from 'react'
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

const CardContainer = (props) => {
    let flags = [
        {
            src: ad,
            country: 'Andorra',
        },
        {
            src: am,
            country: 'Armenia',
        },
        {
            src: bg,
            country: 'Bulgaria',
        },
        {
            src: at,
            country: 'Austria',
        },
        {
            src: al,
            country: 'Albania',
        },
        {
            src: ci,
            country: 'Ireland',
        },
        {
            src: bv,
            country: 'Norway',
        },
        {
            src: by,
            country: 'Belarus',
        },
        {
            src: az,
            country: 'Azerbaijan',
        }
    ]
    return(
        <div>
            <div className='flag-container'>
                {flags.map((flag) => (
                    <Flag key={uniqid()} 
                    flag={flag.src} 
                    country={flag.country} 
                    updateScore={props.updateScore}/>
                ))}
            </div>
        </div>
    )
}

export default CardContainer
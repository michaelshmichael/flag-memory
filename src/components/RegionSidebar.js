import React from 'react'
import '../styles/card.css'

const RegionSidebar = (props) => {
    return(
        <div className='region-sidebar'>
            <h1>Region Sidebar</h1>
            <h2 id='Europe' onClick={e => props.changeContinent(e)}>
                Europe
            </h2>
            <h2 id='Africa' onClick={e => props.changeContinent(e)}>
                Africa
            </h2>
        </div>
    )
}
export default RegionSidebar
import React from 'react'
import Header from './Header'

const Instructions = () => {
    return(
        
        <div>
        <Header />
            <div className='main-body-container'>
                <div className='instructions-container'>
                    <div className='instructions-text-container'>
                        <h1> 
                            Instructions
                        </h1>
                        <p>
                            First select your desired continent. Then, click on a flag, try to click on all the flags without clicking on any twice!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructions;
import React from 'react'
import { Globe } from 'react-bootstrap-icons'
import Dropdown from 'react-bootstrap/dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = (props) => {
    return(
        <div className='header'>
            <div className='title'>
                <Globe style={{fontSize: '45px', marginRight:'15px'}}/>
                <h1>Veximemory</h1>
            </div>
            <div className='selectContinent'>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Select Continent
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item
                        type="button"
                        id='Europe' 
                        onClick={e => props.changeContinent(e)}>
                        Europe
                    </Dropdown.Item>
                    <Dropdown.Item 
                        class="dropdown-item" 
                        type="button"
                        id='Africa' 
                        onClick={e => props.changeContinent(e)}>
                        Africa
                    </Dropdown.Item>
                    <Dropdown.Item
                        type="button"
                        id='Asia' 
                        onClick={e => props.changeContinent(e)}>
                        Asia
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className='scores'>
            <h2 style={{marginRight: '15px'}}>Score: {props.score}</h2>
            <h2>High Score: {props.highScore}</h2>
            </div>
        </div>
    )
}

export default Header
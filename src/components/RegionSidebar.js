import React from 'react'
import Dropdown from 'react-bootstrap/dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'


const RegionSidebar = (props) => {
    return(
        <div className='region-sidebar'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
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
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default RegionSidebar
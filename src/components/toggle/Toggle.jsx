import React from 'react'
import './Toggle.css';
import Sun from '../../images/sun.png';
import Moon from '../../images/moon.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Toggle = () => {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: 'TOGGLE' }); 
    }

    return (
        <div className='t'>
            <img className='t-icon' alt='' src={Sun} />
            <img className='t-icon' alt='' src={Moon} />
            <div 
            className='t-button' 
            onClick={handleClick}
            style={{ left: theme.state.darkMode ? 0 : 25 }}
            >
            </div>
        </div>
    )
}

export default Toggle
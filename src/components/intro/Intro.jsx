import React from 'react'
import './Intro.css';
import Me from '../../images/me.png'

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Joseph Onyango</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Software Developer</div>
                            <div className='i-title-item'>BackEnd Development</div>
                            <div className='i-title-item'>FrontEnd Development</div>
                            <div className='i-title-item'>Database Administration</div>
                            <div className='i-title-item'>Solution Architecture</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        I design and devleop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                    </p>
                </div>    
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={Me} alt='' className='i-img' />
            </div>
        </div>
    )
}

export default Intro;
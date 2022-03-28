import React from 'react';
import './About.css';
import Award from '../../images/award.jpg'

const About = () => {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img 
                        className='a-img'
                        src='https://images.pexels.com/photos/3027243/pexels-photo-3027243.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                        alt=''
                    />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    It is a long established fact that a reader will always create readable content.
                </p>
                <p className='a-desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis enim mi. Proin in purus felis. Curabitur finibus nisl urna, in imperdiet lectus suscipit vel. Vivamus vel congue nisi. Nulla ut ex non turpis sagittis euismod. Nullam non erat turpis. Sed cursus ligula ligula, sed iaculis urna molestie in. Sed auctor a nisi nec posuere. Vestibulum convallis id erat quis condimentum. Mauris in pulvinar nisi.
                </p>
                <div className='a-award'>
                    <img className='a-award-img' alt='' src={Award} /> 
                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>Internationally Recongnised</h4>
                        <p className='a-award-desc'>Ut sed mi nisl. Ut placerat velit vitae ipsum accumsan, sodales tincidunt lorem condimentum. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
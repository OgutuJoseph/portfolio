import React from 'react';
import './Contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';

const Contact = () => {
    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Let's discuss your own project</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img className='c-icon' alt='' src={Phone} />
                            (+254) - 719 -338629
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon' alt='' src={Email} />
                            onyango.joseph@yahoo.com
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon' alt='' src={Address} />
                            BuruBuru, Nairobi.
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always ready to develop a solution when a new project comes along.
                    </p>  
                    <form>
                        <input type='text' placeholder='Name' name='user_name' /> 
                        <input type='text' placeholder='Subject' name='user_subject' /> 
                        <input type='text' placeholder='Email' name='user_email' /> 
                        <textarea rows='5' placeholder='Message' name='message' />   
                        <button>Submit</button>
                    </form>  
                </div>
            </div>
        </div>
    )
}

export default Contact;
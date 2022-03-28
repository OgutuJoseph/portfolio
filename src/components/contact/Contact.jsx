import React, { useRef, useState }  from 'react';
import './Contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();

    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        //to prevent page refresh
        e.preventDefault();

        emailjs.sendForm('service_wlptfyn', 'template_ucgaxa7', formRef.current, 'xsSAnH1tvqnJu-W6g')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

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
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' name='user_name' /> 
                        <input type='text' placeholder='Subject' name='user_subject' /> 
                        <input type='text' placeholder='Email' name='user_email' /> 
                        <textarea rows='5' placeholder='Message' name='message' />   
                        <button>Submit</button>
                        {done && "Thank you for reaching out to me. Will respond to you soonest!"}
                    </form>  
                </div>
            </div>
        </div>
    )
}

export default Contact;
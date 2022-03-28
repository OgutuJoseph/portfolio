import React from 'react';
import './Product.css';

const Product = ({img, link}) => {
    return (
        <div className='p'>
            <div className='p-browser'>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                <img className='p-img' alt='' src={img} />    
            </a>
        </div>
    )
}

export default Product;
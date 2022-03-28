import React from 'react';
import './ProductList.css';
import Product from '../product/Product';

const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'>Create & inspire. It's Josef</h1>
                <p className='pl-desc'>
                Lama Dompin is a carefully crafted portfolio template for freelance creatives. The design is made in a clean style, which makes the website memorable.
                </p>
            </div>
            <div className='pl-list'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default ProductList;

import React from 'react';
import ReactModal from '../Modal/ReactModal';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const {title,description,image,price,rating} = props.product;
    return (
        <div className='col-md-4 col-12'>
            <div className='h-100 p-3 product-container'>
                <div className='image-container'>
                    <img src={image} className='image-fix mb-3' alt="" />
                </div>
                <p className='m-0'>{title.slice(0,15)}</p>
                <p className='m-0'>Price: {price}</p>
                <p className='m-0'>Rating: {rating.rate}</p>
                <p className='m-0 mt-3'>{description.slice(0,100)}</p>
                <div className='mt-3'>
                    <button onClick={props.updateCount} className='btn btn-success mx-1'>Add to cart</button>
                    <button onClick={props.decCount} className='btn btn-danger mx-1'>Remove</button>
                    <ReactModal></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
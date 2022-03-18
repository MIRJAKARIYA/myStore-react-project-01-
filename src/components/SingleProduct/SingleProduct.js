import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const {title,description,image,price,rating} = props.product;
    return (
        <div className='col-md-4 col-lg-3 col-12'>
            <div className='h-100 p-3 product-container'>
                <img src={image} className='image-fix' alt="" />
                <p>{title.slice(0,15)}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating.rate}</p>
                <p>{description.slice(0,100)}</p>
                <div>
                    <button>Add</button>
                    <button>Remove</button>
                    <button>Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
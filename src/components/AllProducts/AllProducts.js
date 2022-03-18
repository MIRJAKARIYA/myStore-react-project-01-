import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect( ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);
    console.log(products[0])
    return (
        <div className='mt-5 container'>
            <h5>Products: {products.length}</h5>
            <div className='row g-4'>
                {
                    products.map(product => <SingleProduct key={product.id} decCount={props.decCount} updateCount={props.updateCount} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;
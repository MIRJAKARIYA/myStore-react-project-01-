import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect( ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);
    console.log(products[0])
    return (
        <div className='mt-5'>
            <h4>Products will be shown here</h4>
            <h5>Products: {products.length}</h5>
            <div className='row g-3'>
                {
                    products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;
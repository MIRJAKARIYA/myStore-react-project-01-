import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-danger d-flex p-3 container'>
            <div className='text-white'>
                Logo
            </div>
            <div className='ms-auto nav-container'>
                <a className='me-4 text-decoration-none' href="/home">home</a>
                <a className='me-4 text-decoration-none' href="/catagories">catagories</a>
                <a className='me-4 text-decoration-none' href="/cart">cart</a>
                <a className='me-4 text-decoration-none' href="/aboutus">about us</a>
            </div>
        </div>
    );
};

export default Navbar;
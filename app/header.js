import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='row justify-content-center align-items-center my-5'>
                <div className='col-auto text'>
                    NewsAPI
                    <img className='imag' src='Ellipse 1.png'></img>
                    Org
                </div>
            </div>
            <hr></hr>
            <hr></hr>
        </div>
    );
};

export default Header;
import React from 'react';
import '../styles/Women.scss';
import Header from './Header';

const Women = () => {
    return (
        
        <div>
            <Header></Header>
        <div className='women-section'>
        <div className="header">
            <h1>Women Collection</h1>
            <p>Available in 2022</p>
        </div>
        <div className="look">
            <p>We have 50% off for all collections just take a look and stand out.</p>
        <button>TAKE A LOOK</button>
        </div>
    </div>
        </div>
        
    );
};

export default Women;
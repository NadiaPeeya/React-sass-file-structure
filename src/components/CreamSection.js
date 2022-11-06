import React from 'react';
import '../styles/CreamSection.scss';
import gift from '../assets/gift.png';
import bus from '../assets/bus.png';
import box from '../assets/box.png';
import cart from '../assets/cart.png';

const CreamSection = () => {
    return (
     <section className='main'>
        <div className="center-text">
            <h1>Good Gift Mode Easy</h1>
            </div>

            <div className="allExp">
         <div className="exps">
        <div className="gift">
            <img src={gift} alt="" />
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, est.</p>
     
         </div>
         <div className="exps">
        <div className="gift">
            <img src={bus} alt="" />
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, nam.</p>
      
         </div>
         <div className="exps">
        <div className="gift">
            <img src={box} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, provident.</p>
     
         </div>
         <div className="exps">
        <div className="gift">
            <img src={cart} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, mollitia.</p>
     
         </div>
         </div>
     </section>
    );
};

export default CreamSection;
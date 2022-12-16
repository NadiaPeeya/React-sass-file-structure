import React from 'react';
import './../styles/Section.scss';
import farmer from '../assets1/Asset 2@2x.png';
import flower from '../assets1/Asset 1.png';

const Section = () => {
    return (
    <section className='main-section'>

      <div className='content'>
         <div className='content-paragraph'>
        
            <h1>A New Way to Invest 
in Agriculture</h1>
<p>Zou provides farmes, ranchers, private foresters,  and <br /> agricultural producers with online self service <br /> applications and educational materials.</p>

<button className='button-design'>Invest Now</button>
 
         </div>
         <div className='banner'>
            <img width="20%" src={flower} alt="" />
         <img className='img-farmer' src={farmer} alt="" />
         </div>
      </div>
   
    </section>
    );
};

export default Section;
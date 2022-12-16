import React from 'react';
import '../styles/Works.scss';

const HowWorks = () => {
    return (
      <section className='works'>
       <div className='container'>
         <h1>How it works</h1>
         <p>Take your pick from the supply chain and participate in agribusiness projects that are backed up not only by Zou, but also by the best land, family heritage, innovation and overall superior expertise.</p>

         <section class="step-wizard">
        <ul class="step-wizard-list">
            <li class="step-wizard-item">
                <span class="progress-count">1</span>
                <span class="progress-label"></span>
            </li>
            <li class="step-wizard-item current-item">
                <span class="progress-count">2</span>
                <span class="progress-label"></span>
            </li>
            <li class="step-wizard-item current-item">
                <span class="progress-count">3</span>
                <span class="progress-label"></span>
            </li>
            <li class="step-wizard-item current-item">
                <span class="progress-count">4</span>
                <span class="progress-label"></span>
            </li>
        </ul>
    </section>
       </div>
      </section>
    );
};

export default HowWorks;
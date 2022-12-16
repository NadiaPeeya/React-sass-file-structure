import React from 'react';
import '../styles/Opportunity.scss';
import human from '../assets1/Icon1.png';
import img2 from '../assets1/Group 14.png';
import img3 from '../assets1/Icon3.png';


const Opportunity = () => {
    return (
        <div>
<section className='opportunity'>
      <div className='container-texts'>
        <h1>New Opportunities</h1>
        <p>We are the first and the only crowdfunding platform enabling you <br /> 
to help finance our farmers.</p>
      </div>
      <div className='container'>
      <div className='cards'>

<div className='single-card'>
 <img src={human} alt="" />
 <h3>Connect with our farmers</h3>
 <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>
</div>

<div className='single-card'>
<img src={img2} alt="" />
<h3>Grow your business</h3>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
</div>

<div className='single-card'>
    <img src={img3} alt="" />
  <h3>Social Impact 
Invesment</h3>
  <p>at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas </p>
</div>

</div>
      </div>
   
      
      </section>


      <section className='Invest'>
        <div className='container-texts'>
        <h1>Invest on your convenience</h1>
      <p>Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil <br /> molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla <br />  pariatur</p>
        </div>
  <div className='container'>
  <div className='cards'>
            <div className='single-card1 container'>
                <div className='investment-text container'>
                <p className='small-text'>NEW FARM TODAY</p>
                <br />
                <br />
                  <p className='rectangle'></p>
              
                 <h3>Short term investment</h3>
                 <p>Invest in farms that will be ready <br />  for harvest in 3-18 months</p>
                 <br />
                 <div className='learn-more-btn'>
                 <button>Learn More</button>
                 </div>
                
                </div>
              
            </div>
            <div className='single-card2 container'>
                <div className='investment-text container'>
                <p className='small-text'>NEW FARM TODAY</p>
                <br />
                <br />
                  <p className='rectangle'></p>
              
                 <h3>Short term investment</h3>
                 <p>Invest in farms that will be ready <br />  for harvest in 3-18 months</p>
                 <br />
                 <div className='learn-more-btn'>
                 <button>Learn More</button>
                 </div>
                
                </div>
              
            </div>
      
                
            </div>

        </div>
 
    
   
      </section>
        </div>
      
    );
};

export default Opportunity;
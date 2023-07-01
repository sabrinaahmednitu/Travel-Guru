import React from 'react';
import './Hero.css';
import hero from '../../../images/Rectangle 28.png'

const Hero = () => {
    return (
      <div>
        <div className="hero">
          <div className="hero-container container">
            <div className="hero-text">
              <h1>COX'S BAZAR</h1>
              <p>
                Cox's Bazar is a city ,fishing port ,tourism center and district
                headquarters in southeastern Bangladesh.It is famous mostly for
                its long natural sandy beach,and it...
              </p>
              <button className='button' > Booking <i class="fa-solid fa-arrow-right"></i> </button>
            </div>
            <div className="hero-img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
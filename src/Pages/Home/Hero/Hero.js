import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
      <div>
        <div className="hero">
          <div className="container">
            <div className="row">
              <h1>COX'S BAZAR</h1>
              <p>
                Cox's Bazar is a city ,fishing port ,tourism center and district
                headquarters in southeastern Bangladesh.It is famous mostly for
                its long natural sandy beach,and it...
              </p>
              <button> Booking <i class="fa-solid fa-arrow-right"></i> </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
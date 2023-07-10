import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Destination.css';
import img1 from '../../../images/Sreemongol.png';
import img2 from '../../../images/Sajek.png';
import img3 from '../../../images/sundorbon.png';

const Destination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className='des-main' >
      <div className="container mt-5 mb-5 ">
        <Slider {...settings}>
          <div className="dCard">
            <img src={img1} alt="" />
            <h4>Sreenongol</h4>
          </div>
          <div className="dCard">
            <img src={img2} alt="" />
            <h4>Sajek</h4>
          </div>
          <div className="dCard">
            <img src={img3} alt="" />
            <h4>Sundorbon</h4>
          </div>
          <div className="dCard">
            <img src={img1} alt="" />
            <h4>Sreenongol</h4>
          </div>
          <div className="dCard">
            <img src={img2} alt="" />
            <h4>Sajek</h4>
          </div>
          <div className="dCard">
            <img src={img3} alt="" />
            <h4>Sundorbon</h4>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Destination;

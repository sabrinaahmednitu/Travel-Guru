import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Home - Golden Fork</title>
        </Helmet>
        <Hero></Hero>
      </div>
    );
};

export default Home;
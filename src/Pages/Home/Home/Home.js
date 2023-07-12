import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
      <div>
        <PageTitle title="Home" ></PageTitle>
        <Hero></Hero>
      </div>
    );
};

export default Home;
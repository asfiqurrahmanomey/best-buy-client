import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import Process from './Process/Process';
import ProductSlider from './Slider/ProductSlider';
import Success from './Success/Success';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <ProductSlider></ProductSlider>
            <Process></Process>
            <Success></Success>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
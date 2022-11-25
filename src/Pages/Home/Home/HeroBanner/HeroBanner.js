import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <div>
            <div className="">
                <section className="py-10 sm:py-16 lg:py-24 ">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div data-aos="fade-right" data-aos-duration="2000" 
                            >
                                <p className="text-base font-semibold tracking-wider text-orange-400 uppercase">FIND YOUR PERFECT MATCH</p>
                                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">"Unbeatable price, and it’s super comfortable" </h1>
                                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Explore and Find Right One</p>

                                <Link to={'/products'} title="" className="animate-bounce inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full lg:mt-16 hover:bg-gray-700 focus:bg-gray-700" role="button">
                                    Products
                                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>

                                <p className="mt-5 text-gray-600">Already joined us? <Link to={'/'} title="" className="text-black transition-all duration-200 hover:underline">Log in</Link></p>
                            </div>

                            <div data-aos="fade-left" data-aos-duration="2000" >
                                <img className="w-full hover:-translate-y-2" src="https://cdn.shopify.com/s/files/1/0104/6917/9492/files/bg-1.png?v=1613702304" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default HeroBanner;
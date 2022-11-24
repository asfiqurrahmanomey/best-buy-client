import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ProductSlider = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4" data-aos="zoom-in" data-aos-duration="2000">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={4} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeLinecap={2} strokeLinecap="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-HD-Photo.png" alt="black chair and white table" className="object-cover object-center w-full h-96 " />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.flashfly.net/wp/wp-content/uploads/2022/04/Screen-Shot-2565-04-26-at-20.55.59.png" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/2_ff89ef53-dbfd-4a58-b377-3cd9a535152e_1024x1024.jpg?v=1643534871" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0104/6917/9492/products/p10_dffae547-ff5d-4f69-84e0-7cbc21e31d3c_2000x.jpg?v=1560496550" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/22_c0e91f1e-3e84-48c6-b8c6-4776749b07b2_1024x1024.jpg?v=1643628035" alt="black chair and white table" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.flashfly.net/wp/wp-content/uploads/2022/04/Screen-Shot-2565-04-26-at-20.55.59.png" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/2_ff89ef53-dbfd-4a58-b377-3cd9a535152e_1024x1024.jpg?v=1643534871" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeLinecap={2} strokeLinecap="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={2} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeLinecap={2} strokeLinecap="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-HD-Photo.png" alt="black chair and white table" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.flashfly.net/wp/wp-content/uploads/2022/04/Screen-Shot-2565-04-26-at-20.55.59.png" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/2_ff89ef53-dbfd-4a58-b377-3cd9a535152e_1024x1024.jpg?v=1643534871" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0104/6917/9492/products/p10_dffae547-ff5d-4f69-84e0-7cbc21e31d3c_2000x.jpg?v=1560496550" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/22_c0e91f1e-3e84-48c6-b8c6-4776749b07b2_1024x1024.jpg?v=1643628035" alt="black chair and white table" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.flashfly.net/wp/wp-content/uploads/2022/04/Screen-Shot-2565-04-26-at-20.55.59.png" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/2_ff89ef53-dbfd-4a58-b377-3cd9a535152e_1024x1024.jpg?v=1643534871" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>

                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeLinecap={2} strokeLinecap="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={1} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeLinecap={2} strokeLinecap="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-HD-Photo.png" alt="black chair and white table" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.flashfly.net/wp/wp-content/uploads/2022/04/Screen-Shot-2565-04-26-at-20.55.59.png" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/2_ff89ef53-dbfd-4a58-b377-3cd9a535152e_1024x1024.jpg?v=1643534871" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0104/6917/9492/products/p10_dffae547-ff5d-4f69-84e0-7cbc21e31d3c_2000x.jpg?v=1560496550" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-HD-Photo.png" alt="black chair and white table" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.flashfly.net/wp/wp-content/uploads/2022/04/Screen-Shot-2565-04-26-at-20.55.59.png" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/2_ff89ef53-dbfd-4a58-b377-3cd9a535152e_1024x1024.jpg?v=1643534871" alt="sitting area" className="object-cover object-center w-full h-96" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">

                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Find Your Product</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeLinecap={2} strokeLinecap="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;
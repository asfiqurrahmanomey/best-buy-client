import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";


import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const Testimonial = () => {
    return (
        <div>
            <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 px-4 py-9 "  >
                <h1 className=" text-center lg:mb-20 mb-10 text-orange-600 font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 w-9/12 md:w-full mx-auto" data-aos="fade-up"
                    data-aos-duration="3000">Hear From Our Sellers</h1>
                <div className=" relative md:flex justify-center items-center ">
                    <div className="md:w-4/12 w-full" data-aos="zoom-in-right" data-aos-duration="3000">
                        <div className=" flex space-x-2 md:mt-0 mt-10">
                            <svg className="cursor-pointer" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                                    fill="#FFC000"
                                />
                            </svg>
                            <svg className="cursor-pointer" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                                    fill="#FFC000"
                                />
                            </svg>
                            <svg className="cursor-pointer" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                                    fill="#FFC000"
                                />
                            </svg>
                            <svg className="cursor-pointer" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                                    fill="#FFC000"
                                />
                            </svg>
                            <svg className="cursor-pointer" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                                    fill="#FFC000"
                                />
                            </svg>
                            <p className=" text-gray-600 text-base leading-4 font-normal">5/5</p>
                        </div>
                        <h3 className="text-gray-800 my-4 font-semibold lg:text-2xl text-xl lg:leading-6 leading-5">Based On 170 reviews</h3>
                    </div>

                    {/* <!-- Medium and large Slider --> */}
                    <div className="hidden md:block relative md:w-8/12 w-full overflow-x-hidden md:mt-0 mt-10" data-aos="zoom-in-left" data-aos-duration="3000">
                        <div id="slider" className="flex justify-start items-start transition ease-out duration-700 gap-4">
                            <Swiper
                                slidesPerView={3}
                                navigation={
                                    (true,
                                    {
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    })
                                }
                                className="mySwiper"
                                speed={700}
                            >
                                <SwiperSlide style={{ width: "100% !important" }}>
                                    <div className="w-72 flex-none">
                                        <div className="w-full">
                                            <div className="mb-6">
                                                <p className='text-lg font-bold '>Ananya Jaman</p>
                                            </div>
                                            <div className="md:w-full h-full relative">
                                                <p className=" text-gray-600 font-normal text-base leading-7">“ The customer care service is very helpful as well as there employees... Thank you very much for your kind reply information and ensuring the customer with the process...”</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100% !important" }}>
                                    <div className=" w-72 flex-none ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-xl font-bold '>Al Hafiz</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ One of the best online shopping place in Bangladesh. I have been using their service for almost 5 years. I am satisfied with their services. One thing to notice that there are good and bad sellers and you have to choose best sellers to provide your needs, thats all. Thank you. ”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100% !important" }}>
                                    <div className=" w-72 flex-none ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-xl font-bold '>Nibir Raihan</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ The best online shopping experience for me. Price are so reasonable. Service is not bad. Courier method is well. They need to improve the system to check quality of their vendor's products.”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100% !important" }}>
                                    <div className=" w-72 flex-none  ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-xl font-bold '>Rn Robin</p>
                                            </div>
                                            <div className="md:w-full h-full relative">
                                                <p className=" text-gray-600 font-normal text-base leading-7">“ It is the one of the best online marketplace in Bangladesh.
                                                    Suddenly I visited in Bangladesh I ordered some products from this website and they are unbillable awesome delivery response day give my product properly in two days so I recommended this website to you Bangladeshi people”</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100% !important" }}>
                                    <div className=" w-72 flex-none ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-xl font-bold '>Riaz Islam</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ been using it for 2 years i only ever got a bad item 1 times but they refunded it and they change items back if u can give them proof so its a amazing website 10/10 reccomend”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100% !important" }}>
                                    <div className=" w-72 flex-none ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-xl font-bold '>Mahedi Hasan</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ Just now I receive my product and I am fully satisfied and so happy for your product... I got same which I ordered... Thank you so much Best Buy Team..”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="flex justify-end items-end mt-10 pr-2 pb-1">
                            <div className="flex items-center space-x-3">
                                <button id="prev" aria-label="slide backward" className="swiper-button-prev focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.666 20H8.33268" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 26.6667L8.33333 20" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 13.3335L8.33333 20.0002" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button id="next" aria-label="slide forward" className="swiper-button-next focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.33398 20H31.6673" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25 26.6667L31.6667 20" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25 13.3335L31.6667 20.0002" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ********************************************************* */}

                    {/* <!-- Small Slider --> */}
                    <div className="block md:hidden relative md:w-8/12 w-full overflow-x-hidden md:mt-0 mt-10 " data-aos="zoom-in-left" data-aos-duration="3000">
                        <div id="slider2" className="flex justify-start items-start transition ease-out duration-700 gap-0 space-x-2">
                            <Swiper
                                slidesPerView={1}
                                navigation={
                                    (true,
                                    {
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    })
                                }
                                className="mySwiper"
                                speed={700}
                            >
                                <SwiperSlide style={{ width: "100%" }}>
                                    <div id="sizeDiv" className="w-full sm:w-6/12 flex-none  ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-lg font-bold '>Ananya Jaman</p>
                                            </div>
                                            <div className="md:w-full h-full relative">
                                                <p className=" text-gray-600 font-normal text-base leading-7">“ “ The customer care service is very helpful as well as there employees... Thank you very much for your kind reply information and ensuring the customer with the process...””</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100%" }}>
                                    <div className="w-full sm:w-6/12 flex-none ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-xl font-bold '>Al Hafiz</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ It was an absolute pleasure working with them. They are the best, Highly Recommended! ”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100%" }}>
                                    <div className="w-full sm:w-6/12 flex-none ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <svg width="71" height="25" viewBox="0 0 71 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M0 0.233896H3.23887V7.39796C4.00525 5.94408 5.63561 5.31358 7.24339 5.33583C9.34509 5.33583 10.6549 6.07019 11.4468 7.27928C12.2627 8.48837 12.5089 10.1277 12.5089 11.9896V19.592H9.27443V12.1298C9.27443 11.0735 9.10687 10.167 8.65521 9.51277C8.18897 8.85778 7.44591 8.42978 6.30947 8.42978C5.02732 8.42978 4.2624 8.95866 3.81802 9.63887C3.37365 10.3183 3.2498 11.1484 3.2498 11.8531V19.5824H0V0.233154V0.233896ZM24.183 11.2493C24.0592 9.94077 22.6998 8.10265 20.3264 8.12787C17.9282 8.12787 16.6184 9.89033 16.4945 11.2493H24.183ZM16.445 13.7669C16.5936 15.9818 18.5212 17.2161 20.3752 17.1901C21.956 17.1901 23.0196 16.4602 23.6388 15.3283H26.9753C26.327 16.8638 25.3654 18.0209 24.2289 18.8013C23.0925 19.6069 21.752 20.0104 20.346 20.0104C16.1645 20.0104 13.1777 16.5611 13.1777 12.7098C13.1777 8.78212 16.1936 5.3336 20.295 5.3336C22.3203 5.3336 24.0978 6.11469 25.3581 7.44766C27.0132 9.18564 27.631 11.3494 27.3614 13.7676H16.434L16.445 13.7669ZM31.178 12.7343C31.178 14.4463 32.3902 16.9379 35.3063 16.9379C37.1115 16.9379 38.2983 15.9811 38.916 14.723C39.238 14.1192 39.3859 13.4642 39.4354 12.7847C39.4602 12.1305 39.3364 11.451 39.0639 10.8465C38.4957 9.53799 37.2354 8.40604 35.283 8.40604C32.6619 8.40604 31.178 10.5698 31.178 12.7083V12.7343ZM42.6488 19.5809H39.4114V17.5929C38.5445 19.2041 36.7407 20.0096 34.8365 20.0096C30.4874 20.0096 27.9398 16.5604 27.9398 12.6586C27.9398 8.30442 31.0301 5.3336 34.8372 5.3336C37.3141 5.3336 38.8221 6.6688 39.4121 7.77553V5.76161H42.6539V19.5809H42.6488ZM51.2523 19.5809H48.0877L43.0437 5.76161H46.4064L49.67 15.4269L52.9337 5.76161H56.2949L51.2523 19.5809Z"
                                                        fill="#FFC000"
                                                    />
                                                    <path d="M60.6706 19.0529L55.5537 5.76172H59.014L62.3272 14.9494L65.5908 5.76617H69.0512L61.9061 24.4137H58.4458L60.6706 19.0529ZM71.0006 17.2095C71.0006 18.5892 70.0681 19.509 68.7299 19.509C67.4186 19.509 66.484 18.5351 66.484 17.2095C66.484 15.884 67.4179 14.91 68.7299 14.91C70.0674 14.91 71.0006 15.884 71.0006 17.2095Z" fill="#FFC000" />
                                                </svg>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ I love this. Thanks. The seeker has solitude. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100%" }}>
                                    <div className="w-full sm:w-6/12 flex-none  ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <svg width="84" height="24" viewBox="0 0 84 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M45.5001 15.4694C45.5001 18.0467 42.2738 17.8939 42.2738 17.8939H39.0476V13.2357H42.2738C45.5962 13.2167 45.5001 15.4694 45.5001 15.4694ZM39.0476 6.13367H41.5058C44.0598 6.26746 43.9637 8.15728 43.9637 8.15728C43.9637 10.5055 41.1407 10.5438 41.1407 10.5438H39.0476V6.13367ZM44.9049 11.4602C44.9049 11.4602 47.1132 10.5248 47.0941 8.04274C47.0941 8.04274 47.4299 3.97649 42.0098 3.48004H35.9942V20.5285H42.8885C42.8885 20.5285 48.6496 20.5478 48.6496 15.7175C48.6496 15.7175 48.784 12.4338 44.9049 11.4602ZM29.3394 0.139202H54.6603V23.8608H29.3394V0.139202Z"
                                                        fill="#FFC000"
                                                    />
                                                    <path
                                                        d="M16.3004 15.4694C16.3004 18.0467 13.0741 17.8939 13.0741 17.8939H9.84789V13.2357H13.0741C16.3965 13.2167 16.3004 15.4694 16.3004 15.4694ZM9.84789 6.13367H12.3061C14.8601 6.26746 14.764 8.15728 14.764 8.15728C14.764 10.5055 11.941 10.5438 11.941 10.5438H9.84789V6.13367ZM15.7051 11.4602C15.7051 11.4602 17.9135 10.5248 17.8944 8.04274C17.8944 8.04274 18.2301 3.97649 12.81 3.48004H6.79448V20.5285H13.6887C13.6887 20.5285 19.4499 20.5478 19.4499 15.7175C19.4499 15.7175 19.5842 12.4338 15.7051 11.4602ZM0.139648 0.139202H25.4606V23.8608H0.139648V0.139202Z"
                                                        fill="#FFC000"
                                                    />
                                                    <path d="M78.6941 4.70213V7.85222C78.6941 7.85222 75.6022 5.96217 72.184 5.92391C72.184 5.92391 65.8085 5.80019 65.5204 12C65.5204 12 65.29 17.7034 72.1073 18.028C72.1073 18.028 74.9687 18.3717 78.8478 15.9089V19.1735C78.8478 19.1735 73.6437 22.2471 67.6136 19.8798C67.6136 19.8798 62.5438 18.0379 62.3516 12C62.3516 12 62.1402 5.79034 68.9002 3.72847C68.9002 3.72847 70.7055 3.04118 73.9508 3.34656C73.9508 3.34656 75.8903 3.53763 78.6941 4.70213ZM58.5391 23.8608H83.86V0.139202H58.5391V23.8608Z" fill="#FFC000" />
                                                </svg>
                                            </div>
                                            <div className="md:w-full h-full relative">
                                                <p className=" text-gray-600 font-normal text-base leading-7">“ I love this. Thanks. The seeker has solitude, but not everyone disturbs it The body of suffering is full of fear. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100%" }}>
                                    <div className="w-full sm:w-6/12 flex-none ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <svg width="115" height="24" viewBox="0 0 115 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H24.1436V24H0V0Z" fill="#FFC000" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.2499 8.59346L10.5397 18.4006L3.89453 11.6898L6.85665 8.699L10.5397 12.4151L17.2878 5.60059L20.2499 8.59346Z" fill="white" />
                                                    <path d="M34.7355 13.5283C37.1224 13.5283 37.5751 14.3169 37.5751 16.0394V16.2884C37.5751 17.7412 37.5957 18.841 37.8426 19.4637H40.3941C40.1884 18.8203 40.1884 17.6581 40.1884 16.6828V16.0186C40.1884 13.466 39.139 12.6774 38.2747 12.4076C39.427 11.9925 40.4765 10.9134 40.4765 9.02486C40.4765 6.78351 38.8509 5.10254 35.8055 5.10254H29.7764V19.4637H32.4102V13.5283H34.7355ZM32.4102 7.28164H35.2704C36.9372 7.28164 37.7603 8.00795 37.7603 9.29467C37.7603 10.6436 37.0195 11.3492 35.1676 11.3492H32.4102V7.28164Z" fill="#FFC000" />
                                                    <path d="M51.4204 14.6695C51.4615 14.3583 51.4615 14.1092 51.4615 13.7564C51.4615 11.2246 50.2681 8.54736 46.7082 8.54736C43.3747 8.54736 41.708 10.9755 41.708 14.2752C41.708 17.0561 43.169 19.7125 46.5848 19.7125C49.7742 19.7125 50.9265 17.6787 51.3175 16.3505H48.7454C48.4573 17.0354 48.0251 17.658 46.667 17.658C45.0827 17.658 44.2801 16.2675 44.2801 14.6695H51.4204ZM44.3419 13.0301C44.4859 11.5151 45.1238 10.4359 46.6876 10.4359C48.2515 10.4359 48.8688 11.5981 48.8894 13.0301H44.3419Z" fill="#FFC000" />
                                                    <path d="M52.002 8.79663L55.6236 19.4637H58.3397L62.1259 8.79663H59.5744C58.422 12.3869 57.3726 15.5828 57.0845 17.1601H57.0639C56.817 15.8526 55.9116 12.6567 54.7593 8.79663H52.002Z" fill="#FFC000" />
                                                    <path d="M63.2432 19.4635H65.7947V8.7964H63.2432V19.4635ZM65.7947 6.80409V4.29297H63.2432V6.80409H65.7947Z" fill="#FFC000" />
                                                    <path d="M77.1789 14.6695C77.2202 14.3583 77.2202 14.1092 77.2202 13.7564C77.2202 11.2246 76.027 8.54736 72.4671 8.54736C69.1333 8.54736 67.4668 10.9755 67.4668 14.2752C67.4668 17.0561 68.9275 19.7125 72.3438 19.7125C75.5327 19.7125 76.6852 17.6787 77.076 16.3505H74.504C74.2162 17.0354 73.7842 17.658 72.4258 17.658C70.8412 17.658 70.0387 16.2675 70.0387 14.6695H77.1789ZM70.1004 13.0301C70.2446 11.5151 70.8825 10.4359 72.4467 10.4359C74.0104 10.4359 74.6273 11.5981 74.6483 13.0301H70.1004Z" fill="#FFC000" />
                                                    <path d="M77.8076 8.79663L80.8326 19.4637H83.5894C84.6187 15.4998 85.3182 12.8019 85.5031 11.5153H85.524C85.7502 12.8435 86.4294 15.4791 87.3552 19.4637H90.0916L93.2811 8.79663H90.7295C89.3515 14.2962 89.0014 15.8941 88.7542 17.0148H88.7339C88.5897 15.9149 88.1786 14.3169 86.8405 8.79663H84.4331C83.0544 14.0264 82.602 16.0187 82.3962 17.1393H82.3758C82.17 15.8941 81.5728 13.3208 80.5028 8.79663H77.8076Z" fill="#FFC000" />
                                                    <path d="M103.421 14.6695C103.462 14.3583 103.462 14.1092 103.462 13.7564C103.462 11.2246 102.269 8.54736 98.7093 8.54736C95.3755 8.54736 93.709 10.9755 93.709 14.2752C93.709 17.0561 95.1697 19.7125 98.586 19.7125C101.775 19.7125 102.927 17.6787 103.318 16.3505H100.746C100.458 17.0354 100.026 17.658 98.668 17.658C97.0834 17.658 96.2809 16.2675 96.2809 14.6695H103.421ZM96.3425 13.0301C96.4868 11.5151 97.1247 10.4359 98.6883 10.4359C100.253 10.4359 100.869 11.5981 100.89 13.0301H96.3425Z" fill="#FFC000" />
                                                    <path
                                                        d="M112.11 4.29297V9.68876C111.843 9.16992 111.019 8.54731 109.394 8.54731C106.41 8.54731 104.6 10.9339 104.6 14.2337C104.6 17.5334 106.307 19.7125 108.982 19.7125C110.629 19.7125 111.596 19.1522 112.11 18.2182C112.11 18.5088 112.172 19.1522 112.213 19.4635H114.682C114.662 18.4673 114.662 17.4919 114.662 16.4957V4.29297H112.11ZM107.233 14.1507C107.233 11.9508 108.139 10.6434 109.785 10.6434C111.863 10.6434 112.192 12.0546 112.192 14.0676C112.192 15.8732 111.863 17.6164 109.703 17.6164C108.18 17.6164 107.233 16.392 107.233 14.1507Z"
                                                        fill="#FFC000"
                                                    />
                                                </svg>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ It was an absolute pleasure working with them. They are the best, Highly Recommended! ”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100%" }}>
                                    <div className="w-full sm:w-6/12 flex-none ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <svg width="71" height="25" viewBox="0 0 71 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M0 0.233896H3.23887V7.39796C4.00525 5.94408 5.63561 5.31358 7.24339 5.33583C9.34509 5.33583 10.6549 6.07019 11.4468 7.27928C12.2627 8.48837 12.5089 10.1277 12.5089 11.9896V19.592H9.27443V12.1298C9.27443 11.0735 9.10687 10.167 8.65521 9.51277C8.18897 8.85778 7.44591 8.42978 6.30947 8.42978C5.02732 8.42978 4.2624 8.95866 3.81802 9.63887C3.37365 10.3183 3.2498 11.1484 3.2498 11.8531V19.5824H0V0.233154V0.233896ZM24.183 11.2493C24.0592 9.94077 22.6998 8.10265 20.3264 8.12787C17.9282 8.12787 16.6184 9.89033 16.4945 11.2493H24.183ZM16.445 13.7669C16.5936 15.9818 18.5212 17.2161 20.3752 17.1901C21.956 17.1901 23.0196 16.4602 23.6388 15.3283H26.9753C26.327 16.8638 25.3654 18.0209 24.2289 18.8013C23.0925 19.6069 21.752 20.0104 20.346 20.0104C16.1645 20.0104 13.1777 16.5611 13.1777 12.7098C13.1777 8.78212 16.1936 5.3336 20.295 5.3336C22.3203 5.3336 24.0978 6.11469 25.3581 7.44766C27.0132 9.18564 27.631 11.3494 27.3614 13.7676H16.434L16.445 13.7669ZM31.178 12.7343C31.178 14.4463 32.3902 16.9379 35.3063 16.9379C37.1115 16.9379 38.2983 15.9811 38.916 14.723C39.238 14.1192 39.3859 13.4642 39.4354 12.7847C39.4602 12.1305 39.3364 11.451 39.0639 10.8465C38.4957 9.53799 37.2354 8.40604 35.283 8.40604C32.6619 8.40604 31.178 10.5698 31.178 12.7083V12.7343ZM42.6488 19.5809H39.4114V17.5929C38.5445 19.2041 36.7407 20.0096 34.8365 20.0096C30.4874 20.0096 27.9398 16.5604 27.9398 12.6586C27.9398 8.30442 31.0301 5.3336 34.8372 5.3336C37.3141 5.3336 38.8221 6.6688 39.4121 7.77553V5.76161H42.6539V19.5809H42.6488ZM51.2523 19.5809H48.0877L43.0437 5.76161H46.4064L49.67 15.4269L52.9337 5.76161H56.2949L51.2523 19.5809Z"
                                                        fill="#FFC000"
                                                    />
                                                    <path d="M60.6706 19.0529L55.5537 5.76172H59.014L62.3272 14.9494L65.5908 5.76617H69.0512L61.9061 24.4137H58.4458L60.6706 19.0529ZM71.0006 17.2095C71.0006 18.5892 70.0681 19.509 68.7299 19.509C67.4186 19.509 66.484 18.5351 66.484 17.2095C66.484 15.884 67.4179 14.91 68.7299 14.91C70.0674 14.91 71.0006 15.884 71.0006 17.2095Z" fill="#FFC000" />
                                                </svg>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ I love this. Thanks. The seeker has solitude. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className=" flex justify-end items-end mt-10 pr-2 pb-1">
                            <div className="flex items-center space-x-3">
                                <button id="prev2" aria-label="slide backward" className="swiper-button-prev focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.666 20H8.33268" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 26.6667L8.33333 20" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 13.3335L8.33333 20.0002" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button id="next2" aria-label="slide forward" className="swiper-button-next focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.33398 20H31.6673" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25 26.6667L31.6667 20" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25 13.3335L31.6667 20.0002" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <style>
                    {`
					@media (min-width: 768px){
						.swiper-slide-active {
							width: 100% !important;
						}
						.swiper-slide, .swiper-slider-next {
							width: 100% !important;
							flex-shrink: inherit;
						}
					}
					.swiper-button-next {
						position: relative;
					}
					.swiper-button-prev {
						position: relative;
						margin-right: 15px;
					}
					.swiper-button-prev::after, .swiper-button-next::after{
						content: " ";
					}
					.swiper-button-prev, .swiper-button-next {
						width: auto;
						height: auto;
					}
					.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
						opacity:1
					}	
				`}
                </style>
            </div>
        </div>
    );
};

export default Testimonial;
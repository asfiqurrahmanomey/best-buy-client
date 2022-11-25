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
                                    <div className=" w-72 flex-none mr-6">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-xl font-bold '>Al Hafiz</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7 ">“ One of the best online shopping place in Bangladesh. I have been using their service for almost 5 years. I am satisfied with their services. One thing to notice that there are good and bad sellers and you have to choose best sellers to provide your needs, thats all. Thank you. ”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100% !important" }}>
                                    <div className=" w-72 flex-none mr-6">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-xl font-bold '>Nibir Raihan</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ The best online shopping experience for me. Price are so reasonable. Service is not bad. Courier method is well. They need to improve the system to check quality of their vendor's products.”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100% !important" }}>
                                    <div className=" w-72 flex-none  mr-6">
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
                                    <div className=" w-72 flex-none mr-6">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                                <p className='text-xl font-bold '>Riaz Islam</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ been using it for 2 years i only ever got a bad item 1 times but they refunded it and they change items back if u can give them proof so its a amazing website 10/10 reccomend”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100% !important" }}>
                                    <div className=" w-72 flex-none mr-6">
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
                                            <p className='text-xl font-bold '>Durjoy Dey</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ I love this. Thanks. The seeker has solitude. I am fully satisfied and would recommend buying from them as they have made my life so much easier :)”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100%" }}>
                                    <div className="w-full sm:w-6/12 flex-none  ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                            <p className='text-xl font-bold '>Nibir Raihan</p>
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
                                            <p className='text-xl font-bold '>Rn Robin</p>
                                            </div>
                                            <p className=" text-gray-600 font-normal text-base leading-7">“ It was an absolute pleasure working with them. They are the best, Highly Recommended! ”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "100%" }}>
                                    <div className="w-full sm:w-6/12 flex-none ">
                                        <div className=" w-full">
                                            <div className="mb-6">
                                            <p className='text-xl font-bold '>Riaz Islam</p>
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
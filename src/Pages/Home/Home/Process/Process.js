import React from 'react';

const Process = () => {
    return (
        <div>
            <section class="py-10 bg-white sm:py-16 lg:py-24">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center" >
                        <h2 class="text-3xl font-bold leading-tight text-orange-600 sm:text-4xl lg:text-5xl" data-aos="fade-right" data-aos-duration="2000">Why Choose us?</h2>
                        <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 text-justify" data-aos="fade-left" data-aos-duration="2000">Catering to your requirements,
                            Handling your needs with care</p>
                    </div>

                    <div class="relative mt-12 lg:mt-20">
                        <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28" data-aos="zoom-in" data-aos-duration="2000">
                            <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                        </div>

                        <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            <div>
                                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow" data-aos="zoom-in" data-aos-duration="2000" >
                                    <span class="text-xl font-semibold text-orange-600"> 1 </span>
                                </div>
                                <div data-aos="zoom-in-right" data-aos-duration="3000">
                                <h3 class="mt-6 text-xl font-semibold leading-tight text-orange-600 md:mt-10">Top Quality Reused Phone</h3>
                                <p class="mt-4 text-base text-gray-600 text-justify ">What can be more convenient than having all the assortment of any-type-of-products in one place? When you don’t have to dash to different shops.</p>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow" data-aos="zoom-in" data-aos-duration="2000" >
                                    <span class="text-xl font-semibold text-orange-600"> 2 </span>
                                </div>
                                <div data-aos="zoom-in" data-aos-duration="3000">
                                <h3 class="mt-6 text-xl font-semibold leading-tight text-orange-600 md:mt-10">Easy To Buy</h3>
                                <p class="mt-4 text-base text-gray-600 text-justify">You can pay less than usual for products. In all this rich variety of choice of thousands items there is, however, an easy navigation so you get.</p>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow" data-aos="zoom-in" data-aos-duration="2000">
                                    <span class="text-xl font-semibold text-orange-600"> 3 </span>
                                </div>
                                <div data-aos="zoom-in-left" data-aos-duration="3000">
                                <h3 class="mt-6 text-xl font-semibold leading-tight text-orange-600 md:mt-10">Free Shipping Across Country</h3>
                                <p class="mt-4 text-base text-gray-600 text-justify">We provide free shipping across all over the Bangladesh with in 48 hours we have strong logistic support to ensure fast delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Process;
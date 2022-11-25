import React from 'react';

const Blog = () => {
    return (
        <div>
            <section class="py-10 bg-white sm:py-16 lg:py-24">
                <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center">Our Blog Section</h2>

                    <div class="flow-root mt-12 sm:mt-16">
                        <div class="divide-y divide-gray--200 -my-9">
                            <div class="py-9">
                                <p class="text-xl font-semibold text-black">How to create an account?</p>
                                <p class="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                <p class="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div class="py-9">
                                <p class="text-xl font-semibold text-black">What payment method do you support?</p>
                                <p class="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.</p>
                            </div>

                            <div class="py-9">
                                <p class="text-xl font-semibold text-black">What payment method do you support?</p>
                                <p class="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div class="py-9">
                                <p class="text-xl font-semibold text-black">How do you provide support?</p>
                                <p class="mt-3 text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">support@Celebration.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blog;
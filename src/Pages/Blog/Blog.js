import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold leading-tight text-gray-700 sm:text-4xl lg:text-5xl text-center" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="3000">Our Blog Section</h2>

                    <div className="flow-root mt-12 sm:mt-16">
                        <div className="divide-y divide-gray--200 -my-9" data-aos="zoom-in" data-aos-duration="3000">
                            <div className="py-9 text-justify ">
                                <p className="text-xl font-semibold text-black">What are the different ways to manage a state in a React application?</p>
                                <p className="mt-3 text-base text-gray-600">There are four main types of state you need to properly manage in your React apps:
                                    <br /><span className='text-orange-600'> 1. Local State</span> <span className='text-orange-600'> 2. Global State</span> <span className='text-orange-600'> 3. Server State</span> <span className='text-orange-600'> 4. URL State .</span> <br />
                                    Here we provide a variable name for the state (count) and a function name we'll use every time we need to update that state (setCount). Last, we set the initial value of the state (0), which will be the value loaded by default every time the app starts. <br />Lastly, as mentioned above, every time we want to update the state we have to use the function we declared: setCount To use it, we just need to call it passing it the new state we want as a parameter. That is, if we want to add 1 to the previous estate, we call setCount(count+1).</p>
                            </div>

                            <div className="py-9 text-justify">
                                <p className="text-xl font-semibold text-black">How does prototypical inheritance work?</p>
                                <p className="mt-3 text-base text-gray-600">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                            </div>

                            <div className="py-9 text-justify">
                                <p className="text-xl font-semibold text-black">What is a unit test? Why should we write unit tests?</p>
                                <p className="mt-3 text-base text-gray-600">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                            </div>

                            <div className="py-9 text-justify">
                                <p className="text-xl font-semibold text-black">React vs. Angular vs. Vue?</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <span className='text-orange-600'>Angular</span> is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.<br />
                                    <span className='text-orange-600'>Vue. js (or simply Vue)</span> is a lightweight, JavaScript framework for building reactive web user interfaces. Vue extends standard HTML and CSS to create a suite of powerful tools for building the front end of interactive web applications. <br />
                                    <span className='text-orange-600'> REACT</span> It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks.
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
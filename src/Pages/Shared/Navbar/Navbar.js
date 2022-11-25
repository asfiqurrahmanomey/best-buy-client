import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png'
import { motion } from "framer-motion"
const Navbar = () => {
    // Animation for
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // *  Menuitems * //
    const navItems = <React.Fragment>
        <li>
            <Link
                to={'/'}
                aria-label="Our product"
                title="Our product"
                className="px-6 py-2 text-base font-semibold text-orange-400 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                to={'/'}
                aria-label="Our product"
                title="Our product"
                className="px-6 py-2 text-base font-semibold text-orange-400 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
            >
                Products
            </Link>
        </li>
        <li>
            <Link
                to={'/blog'}
                aria-label="Product pricing"
                title="Product pricing"
                className="px-6 py-2 text-base font-semibold text-orange-400 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
            >
                Blog
            </Link>
        </li>
        <li>
            <Link
                to={'/'}
                aria-label="About us"
                title="About us"
                className="px-6 py-2 text-base font-semibold text-orange-400 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
            >
                Login
            </Link>
        </li>
    </React.Fragment>

    return (
        <div className=''>
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <motion.div >
                        <Link
                            to={'/'}
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img src={Logo} alt="" />
                            <span className="ml-2 text-xl font-bold tracking-wide  text-orange-400">
                                Best Buy
                            </span>
                        </Link>
                    </motion.div>
                    <motion.div >
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            {navItems}
                        </ul>
                    </motion.div>

                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to={'/'}
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img src={Logo} alt="" />
                                                <span className="ml-2 text-xl font-bold tracking-wide  text-orange-400">
                                                    Best Buy
                                                </span>
                                            </Link>
                                        </div>
                                        <div >
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4 my-2 text-center">
                                            {navItems}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
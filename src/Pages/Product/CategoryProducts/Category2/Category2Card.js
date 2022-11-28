import React from 'react';
import { HiOutlineLocationMarker, HiCheckCircle } from "react-icons/hi";

const Category2Card = ({ category2, setBooking }) => {
    const { _id, title, seller, published_date, rating, name, image_url, current_price, selling_price, location, used } = category2;
    return (
        <div>
            <div className="">
                {/* Remove py-8 */}
                <div className="mx-auto container py-6">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center ">
                        {/* Card 1 */}
                        <div className="mx-4 w-72 lg:mb-0 mb-8 shadow-md" data-aos-duration="3000" data-aos="zoom-in-up">
                            <div>
                                <img src={image_url} className="w-full h-44" alt='' />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div className='flex'>
                                        <HiCheckCircle className='text-blue-500'></HiCheckCircle>
                                        <p className='text-sm ml-2 font-semibold text-indigo-700'>{seller?.name}</p>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Featured</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">{title}</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Current Price: ৳{current_price}</p>
                                    <p className="text-orange-600 mt-2 text-sm font-semibold">Selling Price: ৳{selling_price}</p>
                                    <div className="flex justify-between mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 shadow-md rounded-lg bg-gray-200 py-1">Used: {used}</p>
                                        </div>
                                        <div className="pl-2">
                                            <label onClick={() => setBooking(category2)}
                                                htmlFor="booking-modal"
                                                className="text-sm font-bold rounded-lg shadow-md text-orange-600 hover:bg-gray-700 hover:text-white p-4 bg-gray-200 py-1"
                                            >Book Now</label>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold flex "><HiOutlineLocationMarker></HiOutlineLocationMarker>  {location}</h2>
                                        <p className="text-xs text-gray-600 pl-5">Published: {seller?.published_date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category2Card;
import React from 'react';

const ProductsCard = ({ products }) => {
    const { _id, title, seller, published_date, rating, image_url, current_price, selling_price, location, used } = products;
    console.log(products);
    return (
        <div>
            <div className="">
                {/* Remove py-8 */}
                <div className="mx-auto container py-6">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center ">
                        {/* Card 1 */}
                        <div className="mx-4 w-72 lg:mb-0 mb-8 shadow-md">
                            <div>
                                <img src={image_url} className="w-full h-44" alt=''/>
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Featured</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">{title}</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Current Price: {current_price}</p>
                                    <p className="text-indigo-700 mt-2 text-sm font-semibold">Selling Price: ${selling_price}</p>
                                    <div className="flex justify-between mt-4">
                                        <div>
                                            <p className="text-xs text-gray-600 px-2 shadow-md bg-gray-200 py-1">Used: {used}</p>
                                        </div>
                                        <div className="pl-2">
                                            <button className="text-sm font-bold rounded-lg shadow-md text-orange-600 p-4 bg-gray-200 py-1">Book Now</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-indigo-700 text-xs font-semibold">Location: {location}</h2>
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

export default ProductsCard;
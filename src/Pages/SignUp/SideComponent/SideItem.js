import React from 'react';

const SideItem = () => {
    return (
        <div>
            <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                <div>
                    <img className="w-full mx-auto" src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Free-Download.png" alt="" />

                    <div className="w-full max-w-md mx-auto xl:max-w-xl">
                        <h3 className="text-2xl font-bold text-center mt-6 text-black">Join Wih us</h3>
                        <div className="flex items-center justify-center mt-10 space-x-3">
                            <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>

                            <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                            <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideItem;
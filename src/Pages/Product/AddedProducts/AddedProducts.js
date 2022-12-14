import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SideCategory from '../SideCategory/SideCategory';
import BookingModal from '../ProductCard/BookingModal/BookingModal';
import AddedProductCard from './AddedProductCard';

const AddedProducts = ({ categories, addProducts }) => {
    // * useLoader for map the data * //
    const addedProducts = useLoaderData();;
        // * for booking modal * //
        const [booking, setBooking] = useState(null);
    return (
        <div>
            <section className='container mx-auto'>
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pt-6'>
                    <div className='grid'>
                        <h1 className='text-center mb-4 text-orange-500 font-bold drop-shadow-md' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">Products Category</h1>
                        <SideCategory></SideCategory>
                    </div>
                    <div className='mx-auto'>
                        <h1 data-aos="zoom-in-right" data-aos-duration="3000" className='text-xl font-bold text-gray-700 mt-4 ml-4'>Total Products: {addedProducts.length}</h1>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto' >
                            {
                                addedProducts.map(addProducts => <AddedProductCard
                                    key={addProducts._id}
                                    addProducts={addProducts}
                                    setBooking={setBooking}
                                >
                                </AddedProductCard>)
                            }
                        </div>
                    </div>
                </div>
                {
                    booking &&
                    <BookingModal
                        booking={booking}
                        addProducts={addProducts}
                        categories={categories}
                        setBooking={setBooking}
                    ></BookingModal>
                }
            </section >
        </div>
    );
};

export default AddedProducts;
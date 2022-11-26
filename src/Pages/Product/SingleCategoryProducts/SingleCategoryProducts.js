import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../ProductCard/ProductsCard';

const SingleCategoryProducts = () => {
    const categoryProducts = useLoaderData();
    return (
        <section className='container mx-auto'>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pt-6'>
                <div className='mx-auto'>
                    <h1 data-aos="zoom-in-right" data-aos-duration="3000" className='text-xl font-bold text-gray-700 mt-4 ml-4'>Total Products: {categoryProducts.length}</h1>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto' >
                        {
                            categoryProducts.map(products => <ProductsCard
                                key={products._id}
                                products={products}
                            ></ProductsCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCategoryProducts;
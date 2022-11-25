import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideCategory from './SideCategory/SideCategory';
import ProductsCard from './ProductCard/ProductsCard';

const Products = () => {
    const allProducts = useLoaderData();
    return (
        <div>
            <section className='container mx-auto'>
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pt-6'>
                    <div className='grid'>
                        <SideCategory></SideCategory>
                    </div>
                    <div className='mx-auto'>
                        <h1 className='text-xl font-bold text-gray-700 mt-4 ml-4'>Total Products: {allProducts.length}</h1>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
                            {
                                allProducts.map(products => <ProductsCard
                                    key={products._id}
                                    products={products}
                                >
                                </ProductsCard>)
                            }
                        </div>
                    </div>
                </div>

            </section >

        </div >
    );
};

export default Products;
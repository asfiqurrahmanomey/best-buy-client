import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const products = useLoaderData();
    return (
        <div>
            <h2>Category{products.length}</h2>
        </div>
    );
};

export default Category;
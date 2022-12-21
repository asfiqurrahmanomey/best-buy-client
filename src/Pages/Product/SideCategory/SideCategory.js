import React from 'react';
import { Link } from 'react-router-dom';

const SideCategory = () => {
    return (
        <div className='mx-auto overflow-x-hidden' data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='grid text-center xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto'>
                <Link className='btn btn-ghost btn-small'  to={'/category1'}>iPhone</Link>
                <Link className='btn btn-ghost btn-small' to={'/category2'}>Samsung</Link>
                <Link className='btn btn-ghost btn-small' to={'/category3'}>Huawei</Link>
                <Link className='btn btn-ghost btn-small' to={'/addProducts'}>New Products</Link>
            </div>
        </div>
    );
};

export default SideCategory;
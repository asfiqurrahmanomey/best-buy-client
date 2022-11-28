import React from 'react';
import { Link } from 'react-router-dom';

const SideCategory = () => {
    return (
        <div className='mx-auto' data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='flex grid-rows-4 grid-flow-col gap-4'>
                <Link className='btn btn-ghost btn-small'  to={'/category1'}>iPhone</Link>
                <Link className='btn btn-ghost btn-small' to={'/category2'}>Samsung</Link>
                <Link className='btn btn-ghost btn-small' to={'/category3'}>Huawei</Link>
                <Link className='btn btn-ghost btn-small' to={'/addProducts'}>New Products</Link>
            </div>
        </div>
    );
};

export default SideCategory;
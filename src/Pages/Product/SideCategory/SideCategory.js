import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product-category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='mx-auto' data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='flex grid-rows-4 grid-flow-col gap-4'>
                {
                    categories.map(category => <p key={category.id} className="btn btn-ghost">
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideCategory;
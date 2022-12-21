import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProducts = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imageBB_key;

    const navigate = useNavigate();

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url);
                }
                const product = {
                    name: data.name,
                    selling_Price: data.selling_Price,
                    location: data.location,
                    image: imageData.data.url
                }

                // Save  information
                fetch('https://best-buy-service-server-eta.vercel.app/addProducts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success(`${data.name} is Added Successfully`);
                        navigate('/addProducts')
                    })

            })
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit(handleAddProduct)} className='w-96 mx-auto sm:w-96 xs:w-54' data-aos="fade-right" data-aos-duration="2000">
                <h2 className='text-orange-600 font-bold'>Add A Products</h2>

                <div className='mt-2'>
                    <label for="" className="text-base font-medium text-gray-900"> Your Name </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <input type="name"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            placeholder="Product Name"
                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                        {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                    </div>
                </div>

                <div className='mt-2'>
                    <label for="" className="text-base font-medium text-gray-900"> Selling Price </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                        <input type="selling_Price" {...register("selling_Price", {
                            required: "Selling is required"
                        })}
                            placeholder="Enter selling_Price to get started"
                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                        {errors.selling_Price && <p role="alert" className='text-red-500'>{errors.selling_Price?.message}</p>}
                    </div>
                </div>

                <div className='mt-2'>
                    <label for="" className="text-base font-medium text-gray-900"> Location </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                        <input type="location"
                            {...register("location", {
                                required: "location is required"
                            })}
                            placeholder="location"
                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                        {errors.location && <p role="alert" className='text-red-500'>{errors.location?.message}</p>}
                    </div>
                </div>


                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="file"

                        {...register("image", {
                            required: "Photo Required",
                        })} placeholder="Type here" className="input input-bordered w-full rounded-lg mx-auto pt-6 pb-12" />
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                </div>

                <input type="submit" className='my-4 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gray-700 focus:outline-none hover:opacity-80 focus:opacity-80' />
                {/* <div>

                                    {signUpError &&
                                        <span className='alert alert-error shadow-lg text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-700 stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {signUpError}
                                        </span>}

                                </div> */}
            </form>
        </div>
    );
};

export default AddProducts;
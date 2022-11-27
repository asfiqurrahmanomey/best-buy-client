import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import SideItem from './SideComponent/SideItem';

const SignUp = () => {
    // * Hook Form * //
    const { handleSubmit, register, formState: { errors } } = useForm();
     // * Signup User from AuthContext* //
    const { createUser } = useContext(AuthContext)
    
    const handleSignUp = (data) => {
        console.log(data);
        // * Signup User * //
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl" data-aos="fade-in" data-aos-duration="3000">Sign up to Celebration</h2>
                            <p className="mt-2 text-base text-gray-600">Already have an account? <Link to={'/login'} title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Login</Link></p>

                            <form onSubmit={handleSubmit(handleSignUp)} data-aos="fade-right" data-aos-duration="2000">

                                <div className='mt-2'>
                                    <label for="" className="text-base font-medium text-gray-900"> Your Name </label>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>

                                        </div>
                                        <input type="name"
                                            {...register("name", {
                                                required: "Name is required"
                                            })}
                                            placeholder="Enter Your Name"
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                                    </div>
                                </div>

                                <div className='mt-2'>
                                    <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>
                                        <input type="email" {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                            placeholder="Enter email to get started"
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                                    </div>
                                </div>

                                <div className='mt-2'>
                                    <label for="" className="text-base font-medium text-gray-900"> Password </label>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                />
                                            </svg>
                                        </div>
                                        <input type="password"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: { value: 6, message: "Password Must be at least 6 characters" },
                                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must Have UpperCase LowerCase & Spacial Character" }
                                            })}
                                            placeholder="Enter Password"
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                                    </div>
                                </div>

                                <div className="form-control w-full rounded-lg mt-2">
                                    <label className="label">
                                        <span className="label-text">Pick the User Option</span>
                                    </label>
                                    <select {...register("category", {
                                        required: "category is required"
                                    })} className=" block w-full py-4 px-2  text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600">
                                        <option value="">Select Category</option>
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                    </select>
                                    {errors.category && <p role="alert" className='text-red-500'>{errors.category?.message}</p>}
                                </div>

                                <input type="submit" className='my-4 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gray-700 focus:outline-none hover:opacity-80 focus:opacity-80' />

                            </form>

                            <div className="mt-3 space-y-3" data-aos="fade-left" data-aos-duration="2000">
                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Sign up with Google
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8" data-aos="fade-left" data-aos-duration="2000">
                        <SideItem></SideItem>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SignUp;
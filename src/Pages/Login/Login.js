import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import LoginSideItems from './LoginSideItems/LoginSideItems';

const Login = () => {
    // * Hook Form * //
    const { register, formState: { errors }, handleSubmit } = useForm();
    // * SignIn User from AuthContext* //
    const { signIn } = useContext(AuthContext);
    // * custom Login Error * //
    const [loginError, setLogInError] = useState('');
    // * private route navigate * //
    const location = useLocation();
    const navigate = useNavigate();
    // * navigate the location * /
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLogInError('');
        // * Login User * //
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLogInError(error.message);
            });

    }

    return (
        <div>
            <div>
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8" data-aos="fade-right" data-aos-duration="2000">
                            <div>
                                <LoginSideItems></LoginSideItems>
                            </div>
                        </div>

                        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24" data-aos="fade-left" data-aos-duration="2000">
                            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Please Login</h2>
                                <p className="mt-2 text-base text-gray-600">Don't have an account? <Link to={'/signup'} title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Signup</Link></p>

                                <form onSubmit={handleSubmit(handleLogin)}>

                                    <div className='mt-2'>
                                        <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div>
                                            <input type="email"
                                                {...register("email", {
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
                                                    required: "Password Required",
                                                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                                                })}
                                                placeholder="Enter email to get started"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                            {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                                        </div>
                                    </div>

                                    <div className="form-control w-full rounded-lg mt-2">
                                        <label className="label">
                                            <span className="label-text">Pick the User Option</span>
                                        </label>
                                        <select
                                            {...register("category", { required: "category is required" })} className=" block w-full py-4 px-2  text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600">
                                            <option value="">Select Category</option>
                                            <option value="buyer">Buyer</option>
                                            <option value="seller">Seller</option>
                                        </select>
                                        {errors.category && <p role="alert" className='text-red-500'>{errors.category?.message}</p>}
                                    </div>
                                    <input type="submit" className='my-4 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gray-700 focus:outline-none hover:opacity-80 focus:opacity-80' />

                                    <div>

                                        {loginError &&
                                            <span className='alert alert-error shadow-lg text-white'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-red-700 stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {loginError}
                                            </span>}

                                    </div>

                                </form>

                                <div className="mt-3 space-y-3">
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
                                        Login with Google
                                    </button>

                                </div>

                                <p className="mt-5 text-sm text-gray-600">
                                    This site is protected by reCAPTCHA and the Google <Link to={'/'} title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Privacy Policy</Link> &
                                    <Link to={'/'} title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Terms of Service</Link>
                                </p>

                            </div>
                        </div>

                    </div>
                </section>


            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div className='className="mx-w-[1440px] mx-auto overflow-x-hidden"'>
            <Navbar></Navbar>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden float-left">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="drawer drawer-mobile px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" >
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="p-2 w-80">
                        {/* <!-- Sidebar content here --> */}
                        <li className='my-4 w-52 hover:bg-gray-400  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gray-700'><Link to={'/dashboard'}>My Order</Link></li>
                        <li className='my-4 w-52 hover:bg-gray-400  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gray-700' ><Link to={'/dashboard/allusers'}>All Users</Link></li>
                        <li className='my-4 w-52 hover:bg-gray-400  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gray-700'><Link to={'/dashboard/allseller'}>All Seller</Link></li>
                        <li className='my-4 w-52 hover:bg-gray-400  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gray-700'><Link to={'/dashboard/addProduct'}>Add Product</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;
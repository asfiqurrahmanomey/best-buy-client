import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import ScrollToTop from "react-scroll-to-top";

const Main = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ScrollToTop smooth />
            <Footer></Footer>
        </div>
    );
};

export default Main;
import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashaboard/Dashaboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Product/Products";
import SingleCategory from "../../Pages/Product/SingleCategory/SingleCategory";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Category1 from "../../Pages/Product/CategoryProducts/Category1/Category1"
import Category2 from "../../Pages/Product/CategoryProducts/Category2/Category2"
import Category3 from "../../Pages/Product/CategoryProducts/Category3/Category3"
import DashboardLayout from "../../Layout/DashboardLayout";
import MyBooking from "../../Pages/Dashaboard/MyBooking/MyBooking";
import AllUsers from "../../Pages/Dashaboard/AllUsers/AllUsers";
import AllSeller from "../../Pages/Dashaboard/AllSeller/AllSeller";
import AddProducts from "../../Pages/Dashaboard/AddProducts/AddProducts";
import ErrorPage from "../../Pages/ErrorPage";
import AddedProducts from "../../Pages/Product/AddedProducts/AddedProducts";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://best-buy-service-server-eta.vercel.app/products')
            },
            {
                path: '/category1',
                element: <Category1></Category1>,
                loader: () => fetch('https://best-buy-service-server-eta.vercel.app/category1')
            },
            {
                path: '/category2',
                element: <Category2></Category2>,
                loader: () => fetch('https://best-buy-service-server-eta.vercel.app/category2')
            },
            {
                path: '/category3',
                element: <Category3></Category3>,
                loader: () => fetch('https://best-buy-service-server-eta.vercel.app/category3')
            },
            {
                path: '/addProducts',
                element: <AddedProducts></AddedProducts>,
                loader: () => fetch('https://best-buy-service-server-eta.vercel.app/addProducts')
            },
            {
                path: '/productCategory/:id',
                element: <SingleCategory></SingleCategory>,
                loader: ({ params }) => fetch(`https://best-buy-service-server-eta.vercel.app/productCategory/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProducts></AddProducts>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

]);

export default router;
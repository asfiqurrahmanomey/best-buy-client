import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Product/Products";
import AllCategory from "../../Pages/Product/AllCategory/AllCategory";



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
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/category/:id',
                element: <AllCategory></AllCategory>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },

]);

export default router;
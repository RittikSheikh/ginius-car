import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Home from "../pages/Homes/Home/Home";
import LoginAndRegister from "../layouts/LoginAndRegister";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Chekout from "../pages/Chekout/Chekout";
import Orders from "../pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/chekout/:id',
                element: <Chekout></Chekout>,
                loader: ({params}) => fetch(`http://localhost:5000/chekout/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            }

        ]
    },
    {
        path: '/login',
        element: <LoginAndRegister></LoginAndRegister>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/login/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;
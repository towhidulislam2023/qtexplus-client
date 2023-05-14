import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Appiontment from "../pages/Appointment/Appiontment";
import Login from "../pages/Login/Login";
import Signup from "../pages/signup.jsx/Signup";
import PrivateRoute from "./PrivateRoute";
import BookedServices from "../pages/BookedServices/BookedServices";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/appiontment/:id",
                element: <PrivateRoute><Appiontment></Appiontment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://qtexplus-doctor-server.vercel.app/doctorinfo/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/bookedAppiontment",
                element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>
            },
        ]
    },
]);
export default router
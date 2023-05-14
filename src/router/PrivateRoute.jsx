/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProviderContext } from "../Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthProviderContext)
    if (loading) {
        return <p>Loading....</p>

    }
    if (user) {
        return children

    }
    return (
        <Navigate to={"/login"} state={location} replace>

        </Navigate>
    );
};

export default PrivateRoute;
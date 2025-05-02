import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = (props) => {
    const {children} = props;
    const {user,loading} = useAuth();
    const {pathname} = useLocation();
    if (loading) {
        return <p className="text-xl font-medium text-[#d9383b] text-center my-24">Loading...</p>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={pathname}></Navigate>
};

export default PrivateRoute;
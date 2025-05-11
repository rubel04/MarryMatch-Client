import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = (props) => {
  const { children } = props;
  const { user, loading } = useAuth();
  const [isAdmin, isPending] = useAdmin();
  const { pathname } = useLocation();
  if (loading || isPending) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={pathname}></Navigate>;
};

export default AdminRoute;
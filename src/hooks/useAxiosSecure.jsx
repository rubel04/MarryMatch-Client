import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        logoutUser()
          .then(() => {
            Swal.fire({
              title: "Session Expired!",
              text: "Please login again to continue using the app",
              icon: "success",
            });
            navigate("/");
          })
          .catch((err) => {
            Swal.fire({
              title: err?.message,
              icon: "error",
            });
          });
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;

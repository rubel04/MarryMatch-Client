import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { loginUserWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const axiosPublic = useAxiosPublic();
  const handleLogin = () => {
    loginUserWithGoogle()
      .then((data) => {
        const userData = {
          userName: data.user?.displayName,
          userEmail: data.user?.email,
          role: "user",
        };
        axiosPublic.post("/users", userData).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Account login successfully!",
              icon: "success",
              timer: 1500,
            });
          }
          state ? navigate(state) : navigate("/");
        });
      })
      .catch((err) => {
        Swal.fire({
          title: err?.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex justify-center">
      <button
        className="p-2 rounded border border-gray-400 flex justify-center items-center gap-1 font-medium cursor-pointer w-full hover:shadow-sm"
        onClick={handleLogin}
      >
        <FcGoogle className="text-2xl" /> Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;

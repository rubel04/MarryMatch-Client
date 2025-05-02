import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginUserWithGoogle } = useAuth();
  const navigate = useNavigate();
  const {state} = useLocation();
  const handleLogin = () => {
    loginUserWithGoogle().then((data) => {
      if (data.user) {
        Swal.fire({
          icon: "success",
          title: "Account login successfully.",
          timer: 1500,
        });
        state? navigate(state) : navigate("/");
      }
    }).catch(err => {
        console.log(err);
    })
  };
  return (
    <div className="flex justify-center">
      <button className="p-2 rounded border border-gray-400 flex justify-center items-center gap-1 font-medium cursor-pointer w-full hover:shadow-sm" onClick={handleLogin}>
        <FcGoogle className="text-2xl" /> Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;

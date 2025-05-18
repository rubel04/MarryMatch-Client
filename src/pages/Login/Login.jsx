import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";
const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleLoginUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((data) => {
        console.log(data.user);
        if (data.user) {
          Swal.fire({
            icon: "success",
            title: "Account login successfully.",
            timer: 1500,
          });
          form.reset();
          state ? navigate(state) : navigate("/");
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Wrong email or password",
          timer: 1500,
        });
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Helmet>
        <title>Member Login - Marry Match</title>
      </Helmet>
      <div className="text-sm md:shadow-xl py-6">
        <form
          onSubmit={handleLoginUser}
          className="flex max-w-sm md:w-sm flex-col gap-4 md:px-10"
        >
          <img
            className="w-22 m-auto"
            src="https://i.ibb.co.com/VYBdzYWM/images.jpg"
            alt="logo"
          />
          <h3 className="text-xl font-medium text-center mb-4">Member Login</h3>
          <div>
            <label htmlFor="">Your Email</label>
            <br />
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <br />
            <input
              className="border border-gray-400 p-2 w-full"
              type="password"
              name="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <input
                className="bg-[#F1494C]"
                type="checkbox"
                name="Remember me"
                id=""
              />
              <p className="">Remember me</p>
            </div>
            <Link className="text-[#4169E1]/90 font-medium ">
              Forgot Password?
            </Link>
          </div>
          <button
            className="p-2 bg-[#F1494C] rounded text-white font-medium cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4 mb-4">Or</p>
        <div className="md:px-10">
          <SocialLogin />
        </div>
        <hr className="mb-4 mt-4 text-gray-300" />
        <p className="text-center">
          New to MarryMatch?
          <Link to="/register" className="text-[#4169E1]/90 font-medium ml-3">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

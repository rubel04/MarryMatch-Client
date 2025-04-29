import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <form className="flex max-w-sm w-sm flex-col gap-4 shadow-xl px-10 py-6 text-sm">
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

        <hr className="mb-4 mt-2" />
        <p className="text-center">
          New to MarryMatch?
          <Link to="/register" className="text-[#4169E1]/90 font-medium ml-3">
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

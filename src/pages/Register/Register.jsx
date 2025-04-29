import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <form className="flex max-w-sm w-sm flex-col gap-4 shadow-xl px-10 py-6 text-sm">
        <h3 className="text-xl font-medium text-center mb-4">
          Register account
        </h3>
        <div>
          <label htmlFor="">Your Name</label>
          <br />
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </div>
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
          <label htmlFor="">Image</label>
          <br />
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            name="image"
            placeholder="Enter Image URL"
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
        <button
          className="p-2 bg-[#F1494C] rounded text-white font-medium cursor-pointer"
          type="submit"
        >
          Register
        </button>
        <p className="text-gray-700">
          By clicking on 'Register Me', you confirm that you accept the{" "}
          <span className="cursor-pointer text-[#4169E1]/80">Terms of Use</span>{" "}
          and{" "}
          <span className="cursor-pointer text-[#4169E1]/80">
            Privacy Policy
          </span>
        </p>
        <hr className="mb-4 mt-2" />
        <p className="text-center">
          Already a member?
          <Link to="/login" className="text-[#4169E1]/90 font-medium ml-3">
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

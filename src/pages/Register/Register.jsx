import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { Helmet } from "react-helmet";
const Register = () => {
  const { registerUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const axiosPublic = useAxiosPublic();
  const [registerError, setRegisterError] = useState("");

  const handleRegisterUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    const userData = { userName: name, userEmail: email, role: "user" };

    setRegisterError("");
    if (password.length < 6) {
      return setRegisterError("Password must be at least 6 characters");
    } else if (!/[a-z]/.test(password)) {
      return setRegisterError("Must have a Lowercase letter in the password");
    } else if (!/[A-Z]/.test(password)) {
      return setRegisterError("Must have an Uppercase letter in the password");
    }

    registerUser(email, password)
      .then(() => {
        updateUser({ name, image }).then(() => {
          axiosPublic.post("/users", userData).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Account register successfully.",
                timer: 1500,
              });
              form.reset();
              state ? navigate(state) : navigate("/");
            }
          });
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
          timer: 1500,
        });
      });
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <Helmet>
        <title>Register Your Account | Marry Match</title>
      </Helmet>
      <form
        onSubmit={handleRegisterUser}
        className="flex max-w-sm w-sm flex-col gap-4 shadow-xl px-10 py-6 text-sm"
      >
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
        <span className="text-red-700">{registerError}</span>
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

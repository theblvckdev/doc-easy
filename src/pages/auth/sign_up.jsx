import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  // const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigator = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "https://supremepraiz.pythonanywhere.com/account/register/",
        {
          username,
          email,
          password,
          confirm_password: confirmPassword,
        }
      );

      toast.success(
        "Your account has been created successfully! Redirecting ..."
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      setLoading(false);

      setTimeout(() => {
        navigator("/");
      }, 2000);
    } catch (err) {
      // console.error(err.response.data);
      toast.error(JSON.stringify(err.response.data));
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="light"
      />
      <ToastContainer />
      <main className="h-screen w-screen overflow-hidden flex items-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow max-w-md w-full mx-auto">
          <h1 className="text-center text-indigo-600 text-4xl font-bold font-poppins">
            Sign Up
          </h1>
          <div className="text-gray-400 text-sm text-center mt-2 font-poppins">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-indigo-600 underline outline-none"
            >
              Log in
            </Link>
          </div>

          <form
            onSubmit={registerUser}
            className="flex flex-col space-y-3 mt-5"
          >
            <div>
              <label
                htmlFor="name"
                className="text-gray-900 text-sm font-poppins"
              >
                Username
              </label>

              <input
                type="text"
                id="name"
                required
                onChange={(e) => setUsername(e.target.value)}
                className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-gray-900 text-sm font-poppins"
              >
                Email address
              </label>

              <input
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-gray-900 text-sm font-poppins"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="text-gray-900 text-sm font-poppins"
              >
                Confirm Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
              />
            </div>

            <div>
              <Button
                text="Create account"
                loading={loading}
                width={"w-full"}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;

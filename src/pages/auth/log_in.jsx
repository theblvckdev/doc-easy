import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://supremepraiz.pythonanywhere.com/account/api/token/",
        {
          username,
          password,
        }
      );

      setLoading(false);
      toast.success("Login successfull! Redirecting ...");

      const compiledUserData = {
        username: username,
        access: response.data.access,
        refresh: response.data.refresh,
      };

      localStorage.setItem("user", JSON.stringify(compiledUserData));

      setTimeout(() => {
        navigator("/");
      }, 200);
    } catch (err) {
      setLoading(false);
      toast.error(err.response?.data?.detail);
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
            Log in
          </h1>
          <div className="text-gray-400 text-sm text-center mt-2 font-poppins">
            Don&apos;t have an account?{" "}
            <Link
              to={"/sign-up"}
              className="text-indigo-600 underline outline-none"
            >
              Sign up
            </Link>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col space-y-3 mt-5">
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
              />
            </div>

            <div>
              <Button text="Log in" loading={loading} width={"w-full"} />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;

import { Link } from "react-router-dom";
import Button from "../../components/button";

const SignUp = () => {
  return (
    <>
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

          <form className="flex flex-col space-y-3 mt-5">
            <div>
              <label
                htmlFor="name"
                className="text-gray-900 text-sm font-poppins"
              >
                Full Name
              </label>

              <input
                type="text"
                id="name"
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
                className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
              />
            </div>

            <div>
              <Button text="Create account" width={"w-full"} />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;

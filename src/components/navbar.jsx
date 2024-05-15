import { IoPersonOutline } from "react-icons/io5";
import Button from "./button";
import Logo from "./logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white py-3 px-0 shadow-md fixed top-0 left-0 right-0 w-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center">
            <div className="mr-auto">
              <Logo />
            </div>

            <div className="flex items-center gap-5">
              <Button text="Upload doc." />

              <Link
                to={"/surveyor-profile/5"}
                className="flex items-center gap-2"
              >
                <div className="h-[45px] w-[45px] rounded-full ring-1 ring-gray-400 bg-gray-100 flex items-center justify-center">
                  <IoPersonOutline />
                </div>

                <div>
                  <h1 className="text-gray-900 leading-3 font-semibold font-poppins">
                    Jude Adeyemi
                  </h1>
                  <small className="text-gray-400">jude@gmail.com</small>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

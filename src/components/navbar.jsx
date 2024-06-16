import { IoPersonOutline } from "react-icons/io5";
import Button from "./button";
import Logo from "./logo";
import AddFileModal from "./add_file_modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user")) || null;
  return (
    <>
      {showModal && (
        <AddFileModal
          showModal={showModal}
          onClick={() => setShowModal(false)}
        />
      )}
      <nav className="bg-white z-30 py-3 px-3 lg:px-0 md:px-5 shadow-md fixed top-0 left-0 right-0 w-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex md:flex-row flex-col md:items-center">
            <div className="mr-auto">
              <Logo />
            </div>

            {userData !== null ? (
              <div className="flex md:flex-row flex-col-reverse md:items-center md:gap-5 gap-2 md:mt-0 mt-2">
                <Button onClick={() => setShowModal(true)} text="Upload doc." />

                <div className="flex items-center gap-2">
                  <div className="h-[45px] w-[45px] rounded-full ring-1 ring-gray-400 bg-gray-100 flex items-center justify-center">
                    <IoPersonOutline />
                  </div>

                  <div>
                    <h1 className="text-gray-900 leading-3 font-semibold font-poppins">
                      {userData.username}
                    </h1>
                    <div className="text-sm text-gray-400 font-poppins">
                      {userData.email}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-2 items-center">
                <Link to={"/login"} className="outline-none no-underline">
                  <Button text="Login" />
                </Link>

                <Link to={"/sign-up"} className="outline-none no-underline">
                  <Button text="Sign up" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

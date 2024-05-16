import { IoPersonOutline } from "react-icons/io5";
import Button from "./button";
import Logo from "./logo";
import AddFileModal from "./add_file_modal";
import { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

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

            <div className="flex items-center gap-5 md:mt-0 mt-2">
              <Button onClick={() => setShowModal(true)} text="Upload doc." />

              <div className="flex items-center gap-2">
                <div className="h-[45px] w-[45px] rounded-full ring-1 ring-gray-400 bg-gray-100 flex items-center justify-center">
                  <IoPersonOutline />
                </div>

                <div>
                  <h1 className="text-gray-900 leading-3 font-semibold font-poppins">
                    Jude Adeyemi
                  </h1>
                  <small className="text-gray-400">jude@gmail.com</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { IoCloseOutline } from "react-icons/io5";
import Button from "./button";
// import { useState } from "react";
import propTypes from "prop-types";

const AddFileModal = ({ showModal, onClick }) => {
  return (
    <>
      <div
        // onClick={onClick}
        className={`fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-20 flex items-center justify-center z-50 ${
          showModal ? "block" : "hidden"
        }`}
      >
        <div className="p-8 md:mx-0 mx-3 bg-white relative rounded-md shadow-lg ring-1 ring-gray-400 max-w-md w-full">
          <button
            onClick={onClick}
            className="h-[30px] w-[30px] rounded-full ring-1 ring-gray-400 bg-gray-200 text-gray-900 flex items-center justify-center absolute right-0 top-0 m-3"
          >
            <IoCloseOutline />
          </button>

          <h1 className="text-center font-poppins font-bold text-indigo-600 text-3xl">
            Upload new doc.
          </h1>

          <div className="mt-5">
            <form className="flex flex-col gap-y-3">
              <div>
                <label
                  htmlFor="filename"
                  className="text-gray-900 text-sm font-poppins"
                >
                  Document name
                </label>

                <input
                  type="text"
                  id="filename"
                  className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
                />
              </div>

              <div>
                <label
                  htmlFor="filename"
                  className="text-gray-900 text-sm font-poppins"
                >
                  Document URL
                </label>

                <input
                  type="file"
                  id="filename"
                  className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
                />
              </div>

              <div className="mt-2">
                <Button text="Upload document" width={"w-full"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

AddFileModal.propTypes = {
  showModal: propTypes.bool,
  onClick: propTypes.func,
};

export default AddFileModal;

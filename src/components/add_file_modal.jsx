import { IoCloseOutline } from "react-icons/io5";
import Button from "./button";
// import { useState } from "react";
import propTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const AddFileModal = ({ showModal, onClick }) => {
  const [loading, setLoading] = useState(false);
  const [filename, setFilename] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);

  const userData = JSON.parse(localStorage.getItem("user")) || null;

  const uploadFile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file_name", filename);
      formData.append("location", location);
      formData.append("file", file[0]);

      const response = await axios.post(
        "http://supremepraiz.pythonanywhere.com/niger/document/surveyor/",
        {
          user: userData.user_id,
          file_name: filename,
          file: formData,
          location,
          created: Date.now(),
          // surveyor: userData.user_id,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userData.access}`,
          },
        }
      );
      console.log(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

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
            <form onSubmit={uploadFile} className="flex flex-col gap-y-3">
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
                  required
                  onChange={(e) => setFilename(e.target.value)}
                  className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="text-gray-900 text-sm font-poppins"
                >
                  Location
                </label>

                <input
                  type="text"
                  id="location"
                  required
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
                />
              </div>

              <div>
                <label
                  htmlFor="fileURL"
                  className="text-gray-900 text-sm font-poppins"
                >
                  Document URL
                </label>

                <input
                  type="file"
                  id="fileURL"
                  required
                  onChange={(e) => setFile(e.target.files)}
                  className="w-full box-border p-1.5 rounded-md ring-1 ring-gray-200 outline-none text-gray-900 duration-300 ease-in font-poppins focus:ring-indigo-600"
                />
              </div>

              <div className="mt-2">
                <Button
                  loading={loading}
                  text="Upload document"
                  width={"w-full"}
                />
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

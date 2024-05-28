// import BlurBackdrop from "../../components/blur_backdrop_effect";
import { IoDownloadOutline, IoFolderOutline } from "react-icons/io5";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
  const userData = JSON.parse(localStorage.getItem("user")) || null;
  const [loading, setLoading] = useState(false);

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const getDocs = async () => {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("user"));

      try {
        const response = await axios.get(
          "http://supremepraiz.pythonanywhere.com/niger/document/1/surveyor/",
          {
            headers: {
              Authorization: `Bearer ${token.access}`,
            },
          }
        );

        console.log(response);
        setLoading(false);
        setDocuments(response.data.results);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getDocs();
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen h-full md:py-24 py-32">
        <div className="max-w-6xl mx-auto w-full lg:px-0 md:px-5 px-3">
          <h1 className="text-gray-900 font-bold md:text-3xl text-xl font-poppins">
            Welcome back{" "}
            <span className="capitalize">{userData?.username}</span>
          </h1>
          {/* <h4 className="text-gray-400 md:text-xl text-base font-light font-poppins mt-1">
            
          </h4> */}

          <div className="md:mt-8 mt-5">
            {loading ? (
              <h1 className="text-center text-gray-500 font-semibold font-poppins">
                Loading ...
              </h1>
            ) : documents.length === 0 ? (
              <h1 className="text-center font-poppins text-gray-400 font-semibold text-2xl">
                No documents found
              </h1>
            ) : (
              <div className="flex md:flex-row flex-col flex-wrap gap-5">
                {documents.map((data, index) => {
                  const { file, file_name, location, surveyor } = data;

                  return (
                    <>
                      <div
                        key={index}
                        className="p-2 px-3 outline-none no-underline bg-white overflow-hidden shadow ring-1 ring-gray-200 rounded-[10px] text-gray-900"
                      >
                        <div className="flex items-center gap-3">
                          <IoFolderOutline className="text-6xl" />

                          <div>
                            <div className="text-sm font-bold font-poppins truncate max-w-[200px]">
                              {file_name}
                            </div>
                            <div className="flex flex-col text-[12px]">
                              <div className="text-gray-400 font-poppins w-full">
                                Surveyor: {surveyor}
                              </div>

                              <div className="text-gray-400 font-poppins w-full">
                                Location: {location}
                              </div>
                            </div>
                          </div>
                          <a
                            href={file}
                            download={`${file_name}.zip`}
                            className="outline-none"
                          >
                            <button className="border-l-2 px-2 ml-auto outline-none">
                              <IoDownloadOutline className="text-4xl text-green-500" />
                            </button>
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

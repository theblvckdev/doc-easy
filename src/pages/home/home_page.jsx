// import BlurBackdrop from "../../components/blur_backdrop_effect";
import {
  IoDownloadOutline,
  IoExitOutline,
  IoFolderOutline,
} from "react-icons/io5";
import Navbar from "../../components/navbar";

export default function Homepage() {
  return (
    <>
      <button className="fixed h-[50px] w-[50px] ring-1 ring-gray-500 bg-gray-200 text-gray-900 text-2xl bottom-0 right-0 m-5 rounded-full flex items-center justify-center shadow-md">
        <IoExitOutline />
      </button>
      <Navbar />
      <main className="bg-gray-100 min-h-screen h-full md:py-24 py-32">
        <div className="max-w-6xl mx-auto w-full lg:px-0 md:px-5 px-3">
          <h1 className="text-gray-900 font-bold md:text-3xl text-xl font-poppins">
            Welcome back <span className="capitalize">jude adeyemi</span>
          </h1>
          <h4 className="text-gray-400 md:text-xl text-base font-light font-poppins mt-1">
            You now have a total of 10 surveyor file
          </h4>

          <div className="md:mt-10 mt-5">
            <div className="grid md:grid-cols-3 gap-5">
              <div className="p-2 px-3 outline-none no-underline bg-white overflow-hidden shadow ring-1 ring-gray-200 rounded-[10px] text-gray-900">
                <div className="flex items-center gap-3">
                  <IoFolderOutline className="text-6xl" />

                  <div>
                    <div className="text-sm font-bold font-poppins truncate max-w-[200px]">
                      http://127.0.0.1:8000/excel_files/States_and_Population_ja9BeNN.xlsx
                    </div>
                    <div className="flex flex-col text-[12px]">
                      <div className="text-gray-400 font-poppins w-full">
                        Surveyor: Jude Adeyemi
                      </div>

                      <div className="text-gray-400 font-poppins w-full">
                        Location: Nigeria
                      </div>
                    </div>
                  </div>
                  <button className="border-l-2 px-2 ml-auto outline-none">
                    <IoDownloadOutline className="text-4xl text-green-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

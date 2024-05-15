import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

const AdminProfile = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen h-full py-24">
        <div className="max-w-6xl mx-auto w-full">
          <Link
            to={"/"}
            className="py-1.5 px-4 ring-1 ring-gray-400 rounded-md bg-gray-200 text-gray-900"
          >
            Go back
          </Link>
        </div>
      </main>
    </>
  );
};

export default AdminProfile;

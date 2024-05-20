import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to={"/"} className="no-underline outline-none">
        <h3 className="text-indigo-600 font-bold text-2xl font-poppins">
          docEasy
        </h3>
      </Link>
    </>
  );
};

export default Logo;

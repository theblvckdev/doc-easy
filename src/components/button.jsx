import propTypes from "prop-types";

const Button = ({ text, width, onClick, loading }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`p-1.5 ${
          loading
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        } px-5 rounded-md ring-1 ring-indigo-600 bg-indigo-600 hover:bg-indigo-700 duration-300 ease-in text-white ${width}`}
      >
        {loading ? "Loading..." : text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  width: propTypes.string,
  onClick: propTypes.func,
  loading: propTypes.bool,
};

export default Button;

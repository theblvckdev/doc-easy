import propTypes from "prop-types";

const Button = ({ text, width, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`p-1.5 px-5 rounded-md ring-1 ring-indigo-600 bg-indigo-600 hover:bg-indigo-700 duration-300 ease-in text-white ${width}`}
      >
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  width: propTypes.string,
  onClick: propTypes.func,
};

export default Button;

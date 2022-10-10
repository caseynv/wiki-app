import ButtonHoverlay from "./ButtonHoverlay";
import Loader from "../../assets/icons/loading.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  text,
  stroke,
  link,
  color,
  text_color,
  loading,
  size,
  yellow,
  onClick
}) => {
  return (
    <div className="button">
      <button
        disabled={loading}
        onClick={onClick}
        className={`${loading ? "opacity-70" : ""} ${
          stroke ? "sys_primary stroke_button" : ""
        } ${yellow ? "sys_bg_yellow" : ""} ${
          !yellow && !stroke ? "sys_bg_primary text-white" : ""
        } rounded font-semibold relative ${
          size === "sm" ? "px-3 py-2 text-base" : ""
        } ${size === "md" ? "px-4 py-3 text-lg" : ""} ${
          size === "lg" ? "px-6 py-6 text-xl" : ""
        } capitalize mt-4`}
        style={{
          backgroundColor: `${color ? color : ""}`,
          color: `${text ? text_color : ""}`,
        }}
      >
        {link && (
          <Link to={link}>
            {text}
            <ButtonHoverlay text={text} />
          </Link>
        )}
        {!link && (
          <div>
            {!loading ? text : <img className="w-6" alt="loading" src={Loader} />}
            <ButtonHoverlay text={text} loading={loading} />
          </div>
        )}
      </button>
    </div>
  );
};

Button.defaultProps = {
  loading: false,
  size: "lg",
};

Button.propTypes = {
   text: PropTypes.string,
  
  stroke: PropTypes.bool,
  link: PropTypes.string,
  color: PropTypes.string,
  text_color: PropTypes.string,
  active: PropTypes.bool,
  target: PropTypes.string,
  loading: PropTypes.bool,
  yellow: PropTypes.bool,
  size: PropTypes.string,
  onClick:PropTypes.func,
};

export default Button;

import ButtonHoverlay from "./ButtonHoverlay";
import Loader from "../../assets/loading/loading.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Buttontable = ({ text, border, stroke, link, color, text_color, loading }) => {
  return (
    <div className="button buttontable">
      <button
        className={`${loading ? "opacity-70" : ""} ${
          stroke
            ? "sys_primary border-2 sys_border_primary hover:border-0"
            : "sys_bg_primary text-white"
        } rounded font-semibold text-l px-6 h-12 relative`}
        style={{
          backgroundColor: `${color ? color : ""}`,
          color: `${text ? text_color : ""}`,
          borderColor: `${border ? border : ""}`,
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
            {!loading ? text : <img className="w-6" src={Loader} />}
            <ButtonHoverlay text={text} loading={loading} />
          </div>
        )}
      </button>
    </div>
  );
};

Buttontable.defaultProps = {
  loading: false,
};

Buttontable.propTypes = {
  text: PropTypes.string,
  stroke: PropTypes.bool,
  link: PropTypes.string,
  color: PropTypes.string,
  text_color: PropTypes.string,
  active: PropTypes.bool,
  target: PropTypes.string,
  loading: PropTypes.bool,
  border: PropTypes.string,
};

export default Buttontable;

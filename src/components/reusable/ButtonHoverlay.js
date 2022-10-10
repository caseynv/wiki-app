import PropTypes from "prop-types";
import Loader from "../../assets/icons/loading.svg";

const ButtonHoverlay = ({ text, loading }) => {
  return (
    <div className="button_hoverlay sys_bg_black rounded">
      {!loading ? text : <img className="w-6" alt="useful" src={Loader} />}
    </div>
  );
};

ButtonHoverlay.propTypes = {
  text: PropTypes.string,
 
  loading: PropTypes.bool,
};

export default ButtonHoverlay;

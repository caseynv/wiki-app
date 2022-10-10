import PropTypes from "prop-types";

function BasicInput({ placeholder, required, label, type, name, onChange }) {
  return (
    <div className="basic-input w-3/4 items-center flex flex-col mb-4">
      <label className="label capitalize mb-2 text-gray-500">{label}</label>
      <input
        onChange={onChange}
        className="input w-1/2 h-20 border rounded focus:outline-none focus:border-none"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

BasicInput.defaultProps = {
  required: true
}

BasicInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

export default BasicInput;

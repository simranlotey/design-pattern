import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Radio.css";

const CustomRadio = ({ disabled, isLabelText }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = () => {
    setIsChecked(true);
  };

  return (
    <div className="radio-group">
      <label
        className={`radio radio--radio ${isChecked && "checked"} ${
          disabled ? "disabled" : ""
        }`}
      >
        {isLabelText && "First radio"}
        <input
          type="radio"
          checked={!isChecked}
          onChange={() => setIsChecked(false)}
          disabled={disabled}
        />
        <span className="radio__indicator"></span>
      </label>
      <label
        className={`radio radio--radio ${!isChecked && "checked"} ${
          disabled ? "disabled" : ""
        }`}
      >
        {isLabelText && "Second radio"}
        <input
          type="radio"
          checked={isChecked}
          onChange={handleRadioChange}
          disabled={disabled}
        />
        <span className="radio__indicator"></span>
      </label>
    </div>
  );
};

CustomRadio.propTypes = {
  disabled: PropTypes.bool,
  isLabelText: PropTypes.bool,
};

CustomRadio.defaultProps = {
  disabled: false,
  isLabelText: true,
};
export default CustomRadio;

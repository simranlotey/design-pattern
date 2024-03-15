import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Checkbox.css";

const CustomCheckbox = ({ labelText, isLabelText, disabled }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`checkbox-container ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className={isChecked ? "checkbox-custom checked" : "checkbox-custom"}
      >
        <span className="checkmark"></span>
      </span>
      {isLabelText && <p>{labelText}</p>}
    </label>
  );
};

CustomCheckbox.propTypes = {
  labelText: PropTypes.string.isRequired,
  isLabelText: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

CustomCheckbox.defaultProps = {
    labelText: '',
    isLabelText: true,
    disabled: false,
};

export default CustomCheckbox;

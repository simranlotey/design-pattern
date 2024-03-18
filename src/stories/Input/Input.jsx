import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PhoneIcon } from "../assets/PhoneIcon.svg";
import { ReactComponent as EnvelopeIcon } from "../assets/EnvelopeIcon.svg";
import "./Input.css";

const Input = ({
  isPhoneIcon,
  isEnvelopeIcon,
  inputColor,
  labelColor,
  labelInsideInput,
  inputBackgroundColor,
  placeholderColor,
  textColor,
  isTextArea,
  rows,
}) => {
  return (
    <div className="input-field-container">
      <label
        htmlFor="input"
        className={`input-label ${labelInsideInput ? "labelInsideInput" : ""}`}
        style={{ color: labelColor }}
      >
        Field Label<span>*</span>
      </label>
      <div
        className={`input-container ${isTextArea ? "textarea" : ""}`}
        style={{
          borderColor: inputColor,
          backgroundColor: inputBackgroundColor,
        }}
      >
        {isPhoneIcon && (
          <PhoneIcon
            className={`input-left-icon ${isTextArea ? "textarea" : ""}`}
            style={{ fill: inputColor }}
          />
        )}
        {isTextArea ? (
          <textarea
            placeholder="Input"
            className={`input-input`}
            style={{
              "--placeholder-color": placeholderColor,
              color: textColor,
            }}
            rows={rows ? rows : "4"}
          />
        ) : (
          <input
            type="text"
            placeholder="Input"
            className={`input-input`}
            style={{
              "--placeholder-color": placeholderColor,
              color: textColor,
            }}
          />
        )}
        {isTextArea
          ? ""
          : isEnvelopeIcon && (
              <EnvelopeIcon
                className={`input-icon`}
                style={{ fill: inputColor }}
              />
            )}
      </div>
    </div>
  );
};

Input.propTypes = {
  isPhoneIcon: PropTypes.bool,
  isEnvelopeIcon: PropTypes.bool,
  inputColor: PropTypes.string,
  labelColor: PropTypes.string,
  labelInsideInput: PropTypes.bool,
  inputBackgroundColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  textColor: PropTypes.string,
  isTextArea: PropTypes.bool,
  rows: PropTypes.number,
};

export default Input;

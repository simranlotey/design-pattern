import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as RightArrowIcon } from '../assets/RightArrowIcon.svg';
import './Link.css'; 

const Link = ({ text, size, color, disabled, isUnderline }) => {

  return (
    <a
      href="/"
      className={`link link--${size} ${disabled ? 'disabled' : ''} ${isUnderline ? "isUnderline" : ""}`}
      style={{color: color, borderColor: color}}
    >
      {text}
      <RightArrowIcon className={`arrow-icon arrow-icon--${size}`} style={{fill: color}}/>
    </a>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isUnderline: PropTypes.bool,
  disabled: PropTypes.bool,
};

Link.defaultProps = {
  size: 'medium',
  color: "#E86C00",
  isUnderline: false,
  disabled: false,
};

export default Link;

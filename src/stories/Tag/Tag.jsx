import React from "react";
import PropTypes from "prop-types";
import "./Tag.css";

const Tag = ({
  children,
  backgroundColor,
  textColor,
  borderRadius,
  border,
}) => {
  const tagStyle = {
    backgroundColor,
    color: textColor,
    borderRadius,
    border,
  };

  return (
    <button type="button" className="custom-tag" style={tagStyle}>
      {children}
    </button>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
};

Tag.defaultProps = {
  backgroundColor: "#2196f3",
  textColor: "#fff",
  borderRadius: "4px",
  border: "none",
};

export default Tag;

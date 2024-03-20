import React from "react";
import "./Colors.css";

function Colors({ colors }) {
  return (
    <div className="color-container">
      {colors.map((color, index) => (
        <div className="color-section" key={index}>
          <div className="color" style={{ backgroundColor: color.hex }}></div>
          <div className="color-info">
            <h4>{color.name}</h4>
            <p>HEX: {color.hex}</p>
            <p>RGB: {color.rgb}</p>
            <p>HSB: {color.hsb}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Colors;

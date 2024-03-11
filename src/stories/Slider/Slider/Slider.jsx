import React, { useState } from "react";
import "./Slider.css";

function Slider({ isNumberLabel, isValue, color }) {
  const [value, setValue] = useState(70);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const calculateBackground = () => {
    const min = 0;
    const max = 100;
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, ${color} 0%, ${color} ${percentage}%, #DEE2E6 ${percentage}%, #DEE2E6 100%)`;
  };

  return (
    <div className="slider">
      <input
        id="myinput"
        type="range"
        min="0"
        value={value}
        max="100"
        onChange={handleChange}
        style={{
          background: calculateBackground(),
        }}
      />
      <span className={`slider-value ${isValue ? "isValue" : ""}`}>
        {value}
      </span>
      <div className={`labels ${isNumberLabel ? "isNumberLabel" : ""}`}>
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}

export default Slider;

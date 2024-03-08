import React, { useState } from "react";
import "./Slider.css";

function Slider() {
  const [value, setValue] = useState(70);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const calculateBackground = () => {
    const min = 0;
    const max = 100;
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, red 0%, red ${percentage}%, #DEE2E6 ${percentage}%, #DEE2E6 100%)`;
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
      <p>{value}</p>
    </div>
  );
}

export default Slider;

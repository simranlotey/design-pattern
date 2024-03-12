import React, { useState, useEffect } from "react";
import "./Slider.css";

function CustomSlider({ isNumberLabel, isValue, color }) {
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

// export default ;

const CustomRangeSlider = ({ isNumberLabel, color }) => {
  const [valueOne, setValueOne] = useState(24);
  const [valueTwo, setValueTwo] = useState(71);

  useEffect(() => {
    updateView();
  }, [valueOne, valueTwo]);

  const updateView = () => {
    const rangeOne = document.querySelector('input[name="rangeOne"]');
    const rangeTwo = document.querySelector('input[name="rangeTwo"]');
    const outputOne = document.querySelector(".outputOne");
    const outputTwo = document.querySelector(".outputTwo");
    const inclRange = document.querySelector(".incl-range");

    if (rangeOne && rangeTwo && outputOne && outputTwo && inclRange) {
      outputOne.innerHTML = valueOne;
      outputOne.style.left =
        (valueOne / rangeOne.getAttribute("max")) * 100 + "%";

      outputTwo.style.left =
        (valueTwo / rangeTwo.getAttribute("max")) * 100 + "%";
      outputTwo.innerHTML = valueTwo;

      if (parseInt(valueOne) > parseInt(valueTwo)) {
        inclRange.style.width =
          ((valueOne - valueTwo) / rangeOne.getAttribute("max")) * 100 + "%";
        inclRange.style.left =
          (valueTwo / rangeOne.getAttribute("max")) * 100 + "%";
      } else {
        inclRange.style.width =
          ((valueTwo - valueOne) / rangeOne.getAttribute("max")) * 100 + "%";
        inclRange.style.left =
          (valueOne / rangeOne.getAttribute("max")) * 100 + "%";
      }
    }
  };

  const handleRangeChange = (event, setValue) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <section className="range-slider container">
      <span className="output outputOne"></span>
      <span className="output outputTwo"></span>
      <span className="full-range"></span>
      <span className="incl-range" style={{ backgroundColor: color }}></span>
      <input
        name="rangeOne"
        value={valueOne}
        min="0"
        max="100"
        step="1"
        type="range"
        onChange={(e) => handleRangeChange(e, setValueOne)}
      />
      <input
        name="rangeTwo"
        value={valueTwo}
        min="0"
        max="100"
        step="1"
        type="range"
        onChange={(e) => handleRangeChange(e, setValueTwo)}
      />
      <div className={`range-labels ${isNumberLabel ? "isNumberLabel" : ""}`}>
        <span>0</span>
        <span>100</span>
      </div>
    </section>
  );
};

export { CustomSlider, CustomRangeSlider };

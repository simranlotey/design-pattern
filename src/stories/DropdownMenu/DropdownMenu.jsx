import React, { useState } from "react";
import { ReactComponent as TickIcon } from "../assets/TickIcon.svg";
import { ReactComponent as SearchIcon } from "../assets/SearchIcon.svg";

import "./DropdownMenu.css";

const DropdownMenuText = () => {
  const itemsText = [
    "Text Only",
    "Text Only",
    "Text Only",
    "Text Only",
    "Text Only",
  ];

  return (
    <>
      <div className="dropdownMenu-container">
        <div className="dropdownMenu">
          {itemsText.map((item, index) => (
            <p key={index} className="dropdownMenu-text">
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const DropdownMenuIconLeft = () => {
  const itemsIconLeft = [
    "Icon Left",
    "Icon Left",
    "Icon Left",
    "Icon Left",
    "Icon Left",
  ];

  return (
    <>
      <div className="dropdownMenu-container">
        <div className="dropdownMenu">
          {itemsIconLeft.map((item, index) => (
            <div key={index} className="dropdownMenu-iconLeft">
              <TickIcon className="dropdownMenu-tickIconLeft" />
              <p className="dropdownMenu-iconText">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const DropdownMenuIconRight = () => {
  const itemsIconRight = [
    "Icon Right",
    "Icon Right",
    "Icon Right",
    "Icon Right",
    "Icon Right",
  ];

  return (
    <>
      <div className="dropdownMenu-container">
        <div className="dropdownMenu">
          {itemsIconRight.map((item, index) => (
            <div key={index} className="dropdownMenu-iconRight">
              <p className="dropdownMenu-iconText">{item}</p>
              <TickIcon className="dropdownMenu-tickIconRight" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const DropdownMenuCheckbox = () => {
  const [isChecked, setIsChecked] = useState([true, false, false, true, false]);

  const handleCheckboxChange = (index) => {
    const newCheckedState = [...isChecked];
    newCheckedState[index] = !newCheckedState[index];
    setIsChecked(newCheckedState);
  };

  return (
    <>
      <div className="dropdownMenu-container">
        <div className="dropdownMenu">
          {isChecked.map((checked, index) => (
            <div key={index} className="dropdownMenu-checkbox">
              <label className={`checkbox-container`}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span
                  className={
                    checked ? "checkbox-custom checked" : "checkbox-custom"
                  }
                >
                  <span className="checkmark"></span>
                </span>
                <p>Checkbox</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const DropdownMenuRadio = () => {
  const [selectedRadioIndex, setSelectedRadioIndex] = useState(1);

  const handleRadioChange = (index) => {
    setSelectedRadioIndex(index);
  };
  const radioButtons = [...Array(5).keys()];

  return (
    <>
      <div className="dropdownMenu-container">
        <div className="dropdownMenu">
          {radioButtons.map((index) => (
            <div key={index} className="radio-group">
              <label
                className={`radio radio--radio ${
                  selectedRadioIndex === index && "checked"
                }`}
              >
                Radio {index + 1}
                <input
                  type="radio"
                  checked={selectedRadioIndex === index}
                  onChange={() => handleRadioChange(index)}
                />
                <span className="radio__indicator"></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const DropdownMenuEverything = () => {
  const [isCheckedMain, setIsCheckedMain] = useState([false, true]);
  const [selectedRadioIndex, setSelectedRadioIndex] = useState(1);

  const handleRadioChange = (index) => {
    setSelectedRadioIndex(index);
  };

  const handleCheckboxMainChange = (index) => {
    const newCheckedState = [...isCheckedMain];
    newCheckedState[index] = !newCheckedState[index];
    setIsCheckedMain(newCheckedState);
  };
  const radioButtonsMain = [...Array(2).keys()];

  return (
    <>
      <div className="dropdownMenu-container">
        <div className="dropdownMenu">
          <p className="dropdownMenu-text">Text Only</p>
          <p className="dropdownMenu-textMini">Text Only</p>
          <div className="dropdownMenu-iconRight">
            <p className="dropdownMenu-iconText">Icon Right</p>
            <TickIcon className="dropdownMenu-tickIconRight" />
          </div>
          <div className="dropdownMenu-iconLeft">
            <TickIcon className="dropdownMenu-tickIconLeft" />
            <p className="dropdownMenu-iconText">Icon Left</p>
          </div>
          <p className="dropdownMenu-textMini">Check & Radio</p>
          {isCheckedMain.map((checked, index) => (
            <div key={index} className="dropdownMenu-checkbox">
              <label className={`checkbox-container`}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleCheckboxMainChange(index)}
                />
                <span
                  className={
                    checked ? "checkbox-custom checked" : "checkbox-custom"
                  }
                >
                  <span className="checkmark"></span>
                </span>
                <p>Checkbox</p>
              </label>
            </div>
          ))}
          {radioButtonsMain.map((index) => (
            <div key={index} className="radio-group">
              <label
                className={`radio radio--radio ${
                  selectedRadioIndex === index && "checked"
                }`}
              >
                Radio {index + 1}
                <input
                  type="radio"
                  checked={selectedRadioIndex === index}
                  onChange={() => handleRadioChange(index)}
                />
                <span className="radio__indicator"></span>
              </label>
            </div>
          ))}
          <div className="dropdown-search-container">
            <input
              type="text"
              placeholder="Search"
              className="dropdown-search-input"
            />
            <SearchIcon className="dropdown-search-icon" />
          </div>
          <div className="dropdown-button">
            <button type="button" className="dropdown-custom-button">
              Small Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export {
  DropdownMenuText,
  DropdownMenuIconLeft,
  DropdownMenuIconRight,
  DropdownMenuCheckbox,
  DropdownMenuRadio,
  DropdownMenuEverything,
};

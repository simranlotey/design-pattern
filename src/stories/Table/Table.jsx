import React, { useState } from "react";
import { ReactComponent as ThreeDotsIcon } from "../assets/ThreeDotsIcon.svg";
import { ReactComponent as CircleExclamation } from "../assets/CircleExclamation.svg";

import "./Table.css";

function Table() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <label className={`checkbox-container`}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={
                  isChecked ? "checkbox-custom checked" : "checkbox-custom"
                }
              >
                <span className="checkmark"></span>
              </span>
            </label>
          </td>
          <td>
            <div className="table-col-1">
              <p>Primart Text</p>
              <p>Secondary Text</p>
            </div>
          </td>
          <td>Primary Text</td>
          <td>
            <div className="table-col-3">
              <p>Primary Text</p>
              <CircleExclamation className="circle-exclamation-icon" />
            </div>
          </td>
          <td>
            <button className="table-col-4">Tag</button>
          </td>
          <td>
            <button className="table-col-5">Small button</button>
          </td>
          <td>
            <div className="table-col-6">
              <p>Primary Text</p>
              <ThreeDotsIcon className="three-dot-icon" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;

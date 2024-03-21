import React from "react";
import "./Elevations.css";

function Elevations({ elevations }) {
  return (
    <div className="elevation-container">
      {elevations.map((elevation, index) => (
        <div className="elevation-section" key={index}>
          <div className="elevation" style={{ boxShadow: elevation.value }}></div>
          <div className="elevation-info">
            <h4>{elevation.name}</h4>
            <p>box-shadow: {elevation.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Elevations;

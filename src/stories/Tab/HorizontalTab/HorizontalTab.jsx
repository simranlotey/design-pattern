import React from "react";
import "./HorizontalTab.css";

function HorizontalTab({ color, tabName, iconPosition, isActive }) {
  return (
    <div className={`horizontal-tab ${isActive ? 'isActive' : ''}`} style={{ borderColor: color }}>
      <svg
        className={`leftIcon ${iconPosition}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{ fill: color }}
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
      </svg>
      <span style={{ color: color }}>{tabName}</span>
      <svg
        className={`rightIcon ${iconPosition}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        style={{ fill: color }}
      >
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
      </svg>
    </div>
  );
}

export default HorizontalTab;

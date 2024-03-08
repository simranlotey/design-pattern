import React from "react";
import "./Status.css";

const Status = ({ statusColor }) => {
  return (
    <div className="status-container">
      <div className="status-dot" style={{ backgroundColor: statusColor }} />
      <span className="status-text">Status</span>
    </div>
  );
};

export default Status;

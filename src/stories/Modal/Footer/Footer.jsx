import React from "react";
import "./Footer.css";

const CustomFooter = ({
  severity,
  btnBorderRadius,
  backgroundColor,
  SolidBtnBackgroundColor,
}) => {
  return (
    <>
      <div
        className={`custom-modal-footer ${severity}`}
        style={{ backgroundColor: backgroundColor }}
      >
        <button
          className="custom-modal-footer-btn custom-modal-footer-text-btn"
          style={{ borderRadius: btnBorderRadius }}
        >
          Small Button
        </button>
        <button
          className="custom-modal-footer-btn custom-modal-footer-outlined-btn"
          style={{ borderRadius: btnBorderRadius }}
        >
          Small Button
        </button>
        <button
          className={`custom-modal-footer-btn custom-modal-footer-solid-btn ${severity}`}
          style={{
            borderRadius: btnBorderRadius,
            backgroundColor: SolidBtnBackgroundColor,
          }}
        >
          Small Button
        </button>
      </div>
    </>
  );
};

export default CustomFooter;

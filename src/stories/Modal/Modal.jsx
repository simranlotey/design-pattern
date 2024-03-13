import React, { useState } from "react";
import { ReactComponent as ErrorIcon } from "./../assets/ErrorIcon.svg";
import { ReactComponent as CloseIcon } from "./../assets/CloseIcon.svg";
import "./Modal.css";

const CustomHeader = ({
  severity,
  headerTitle,
  borderRadius,
  HeaderBackgroundColor,
}) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div
          className={`custom-modal-header ${severity}`}
          style={{ borderRadius, backgroundColor: HeaderBackgroundColor }}
        >
          <ErrorIcon className="error-icons" />
          <span className="custom-modal-header-message">{headerTitle}</span>
          <CloseIcon
            className="custom-modal-header-close-btn"
            onClick={handleClose}
          />
        </div>
      )}
    </>
  );
};

const CustomFooter = ({
  severity,
  btnBorderRadius,
  FooterBackgroundColor,
  solidBtnBackgroundColor,
}) => {
  return (
    <>
      <div
        className={`custom-modal-footer ${severity}`}
        style={{ backgroundColor: FooterBackgroundColor }}
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
            backgroundColor: solidBtnBackgroundColor,
          }}
        >
          Small Button
        </button>
      </div>
    </>
  );
};

const CustomModal = ({
  severity,
  headerTitle,
  btnBorderRadius,
  borderRadius,
  MainBackgroundColor,
  HeaderBackgroundColor,
  FooterBackgroundColor,
  solidBtnBackgroundColor,
}) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <div
          className="custom-main-modal"
          style={{
            borderRadius: borderRadius + 5,
            backgroundColor: MainBackgroundColor,
          }}
        >
          <div
            className={`custom-modal-hmodal ${severity}`}
            style={{
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
              backgroundColor: HeaderBackgroundColor,
            }}
          >
            <ErrorIcon className="error-icons" />
            <span className="custom-modal-hmodal-message">{headerTitle}</span>
            <CloseIcon
              className="custom-modal-hmodal-close-btn"
              onClick={handleClose}
            />
          </div>

          <div
            className={`custom-modal-footer ${severity}`}
            style={{
              borderBottomLeftRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
              backgroundColor: FooterBackgroundColor,
            }}
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
                backgroundColor: solidBtnBackgroundColor,
              }}
            >
              Small Button
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { CustomHeader, CustomFooter, CustomModal };

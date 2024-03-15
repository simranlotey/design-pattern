import React from "react";
import PropTypes from 'prop-types';
import "./Toggle.css";

const Toggle = ({ disabled, labelText, isLabelText, switchToggle }) => {
    return (
        <>
            <div className={`toggle-button ${switchToggle}`}>
                <label
                    className={`toggle ${disabled ? "disabled" : ""} ${switchToggle}`}
                    htmlFor="toggle"
                >
                    <input type="checkbox" className={`slider ${switchToggle}`} id="toggle" defaultChecked />
                    <span className={`slider ${switchToggle}`}></span>
                </label>
                {isLabelText && <span className={`labelText ${switchToggle}`}>{labelText}</span>}
            </div>
        </>
    );
};

Toggle.propTypes = {
    labelText: PropTypes.string,
    isLabelText: PropTypes.bool,
    disabled: PropTypes.bool,
    switchToggle: PropTypes.oneOf(["toggle", "switch"]),
};

Toggle.defaultProps = {
    labelText: '',
    isLabelText: true,
    disabled: false,
    switchToggle: "toggle", 
};

export default Toggle;

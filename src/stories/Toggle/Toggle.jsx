import React from 'react';
import './Toggle.css'; 

const Toggle = () => {
    return (
        <>
            <label className="toggle" htmlFor="toggle">
                <input type="checkbox" id="toggle" defaultChecked />
                <span className="slider"></span>
            </label>
        </>
    );
}

export default Toggle;

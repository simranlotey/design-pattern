import React, { useState, useEffect } from 'react';
import './NumberBadge.css';

const NumberBadge = ({ color, backgroundColor, badgeContent }) => {
  const [number, setNumber] = useState(badgeContent);

  useEffect(() => {
    if (parseInt(badgeContent) > 99) {
      setNumber("+99");
    } else {
      setNumber(badgeContent);
    }
  }, [badgeContent]);

  return (
    <div className="number-custom-badge" style={{color: color, backgroundColor: backgroundColor}}>
      {number}
    </div>
  );
};

export default NumberBadge;

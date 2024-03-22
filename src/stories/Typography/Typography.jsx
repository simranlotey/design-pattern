import React from "react";
import "./Typography.css";

const Typography = ({ typography }) => {
  return (
    <div>
      {typography.map((item, index) => (
        <>
          <span className="typoType">{item.type}</span>
          <div
            key={index}
            className="typography"
            style={{
              color: item.color,
              fontWeight: item.fontWeight,
              fontSize: `${item.fontSize}px`,
              lineHeight: `${item.lineHeight}px`,
            }}
          >
            {item.text}
          </div>
        </>
      ))}
    </div>
  );
};

export default Typography;

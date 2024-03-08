import React from "react";
import "./Avatar.css";

function Avatar({ avatarSize, isAvatarName, isDot, avatarName }) {
  return (
    <div className="avatar">
      <div className={`avatarImg ${avatarSize}`}>
        <div className={`avatarDot ${isDot ? "isDot" : ""} ${avatarSize}`} />
        <img
          src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-598.jpg"
          alt="avatar"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </div>
      <p
        className={`avatarName ${
          isAvatarName ? "isAvatarName" : ""
        } ${avatarSize}`}
      >
        {avatarName}
      </p>
    </div>
  );
}

export default Avatar;

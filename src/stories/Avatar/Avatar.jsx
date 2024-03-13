import React from "react";
import avatar from "../assets/avatar.avif"
import PropTypes from "prop-types";
import "./Avatar.css";

function Avatar({ avatarSize, isAvatarName, isDot, avatarName }) {
  return (
    <div className="avatar">
      <div className={`avatarImg ${avatarSize}`}>
        <div className={`avatarDot ${isDot ? "isDot" : ""} ${avatarSize}`} />
        <img
          src={avatar}
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

Avatar.propTypes = {
  isAvatarName: PropTypes.bool,
  isDot: PropTypes.bool,
  avatarName: PropTypes.string.isRequired,
};

export default Avatar;

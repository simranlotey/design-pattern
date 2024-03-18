import React from "react";
import { ReactComponent as HeartIcon } from "../assets/HeartIcon.svg";
import { ReactComponent as ShareIcon } from "../assets/ShareIcon.svg";
import { ReactComponent as ThreeDotsIcon } from "../assets/ThreeDotsIcon.svg";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ title, description, textButton, orientation }) => {
  return (
    <div className={`card ${orientation}`}>
      <img src="https://w0.peakpx.com/wallpaper/402/48/HD-wallpaper-nature-mountains-look-nice.jpg" alt="PlaceholderImage" />
      <div className="card-content">
        <span>card leading</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-footer">
          <button>{textButton}</button>
          <div className="icons">
            <HeartIcon className="heart-icon" />
            <ShareIcon className="share-icon" />
            <ThreeDotsIcon className="three-dot-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  textButton: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default Card;

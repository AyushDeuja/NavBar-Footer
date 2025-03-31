import React from "react";
import "./ProfileCard.css";
const ProfileCard = ({ profileName, profileStatus, profileImg }) => {
  return (
    <div className="container">
      <div className="textContainer">
        <p style={{ fontWeight: "bold" }}>{profileName}</p>
        <p>{profileStatus}</p>
      </div>
      <div>
        <img className="ProfileImg" src={profileImg} alt="profileImage" />
      </div>
    </div>
  );
};

export default ProfileCard;

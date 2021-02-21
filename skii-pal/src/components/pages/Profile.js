import React, { useEffect } from "react";
import ProfileLeft from "../ProfileLeft";
import ProfileRight from "../ProfileRight";
import { useSelector } from "react-redux";

import "../css/profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-left">
        <ProfileLeft />
      </div>
      <div className="profile-right">
        <ProfileRight />
      </div>
    </div>
  );
}

export default Profile;

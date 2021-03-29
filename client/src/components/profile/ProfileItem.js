import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./profileItem.module.css";

const ProfileItem = ({ profile }) => {
  return (
    <div className={classes.myMargin}>
      <h4>
        <span className="p-2 font-weight-bold text-info">Mobile number : </span>
        {profile.mobile}
      </h4>

      {profile.gmail && (
        <h4 className="p-2">
          <span className="font-weight-bold text-info">Gmail ID : </span>{" "}
          {profile.gmail}
        </h4>
      )}
      {profile.about && (
        <h4 className="p-2">
          <span className="font-weight-bold text-info">Mobile number : </span>{" "}
          {profile.about}
        </h4>
      )}
      <h4 className="p-2">
        {" "}
        <span className="font-weight-bold text-info">State : </span>
        {profile.state}
      </h4>
      <h4 className="p-2">
        <span className="font-weight-bold text-info">District : </span>{" "}
        {profile.district}
      </h4>
      {profile.address && (
        <h4 className="p-2">
          <span className="font-weight-bold text-info">Address : </span>{" "}
          {profile.address}
        </h4>
      )}
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;

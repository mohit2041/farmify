import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({ profile }) => {
  return (
    <Fragment>
      <div className="text-left">
        <div className="m-2">
          <Link to="/edit-profile" className="btn btn-primary">
            Edit Profile
          </Link>
        </div>
        <h4 className="p2">Mobile number : {profile.mobile}</h4>
        {profile.gmail && <h4 className="p2">Gmail ID : {profile.gmail}</h4>}
        {profile.about && <h4 className="p2">About : {profile.about}</h4>}
        <h4 className="p2"> State : {profile.state}</h4>
        <h4 className="p2">District : {profile.district}</h4>
        {profile.address && <h4 className="p2">Address : {profile.address}</h4>}
      </div>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;

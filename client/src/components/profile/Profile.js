import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";

const Profile = ({
  profile: { loading, profile },
  auth: { user },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading || user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="card text-center">
        <div className="card-header">
          <h1 className="text-dark p-1">Welcome</h1>
          <p className="fs-3 text-info p-1">
            <i className="fas fa-user"></i> {user && user.name}
          </p>
        </div>

        <div className="card-body bg-dark text-light">
          <img
            src={user && user.avatar}
            className="img-thumbnail w-25 h-25"
            alt="..."
          />
          {profile !== null ? (
            <ProfileItem profile={profile} />
          ) : (
            <Fragment>
              <p className="fs-5 text-secondary p-1">
                You haven't set your profile yet!
              </p>
              <div className="m-2">
                <Link to="/create-profile" className="btn btn-primary">
                  Create Profile
                </Link>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);

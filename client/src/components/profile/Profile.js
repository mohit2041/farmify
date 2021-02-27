import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const Profile = ({
  profile: { loading, profile },
  auth: { user },
  getProfileById,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

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
            <div>
              <div className="m-3">
                <Link to="/edit-profile" className="btn btn-primary">
                  Edit Profile
                </Link>
              </div>
              <h4 className="p2">Mobile number : {profile.mobile}</h4>
              {profile.gmail && (
                <h4 className="p2">Gmail ID : {profile.gmail}</h4>
              )}
              {profile.about && <h4 className="p2">About : {profile.about}</h4>}
              <h4 className="p2"> State : {profile.state}</h4>
              <h4 className="p2">District : {profile.district}</h4>
              {profile.address && (
                <h4 className="p2">Address : {profile.address}</h4>
              )}
            </div>
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
  getProfileById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);

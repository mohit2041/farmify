import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileById, deleteAccount } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";

const Profile = ({
  profile: { loading, profile },
  auth: { user },
  getProfileById,
  deleteAccount,
  match,
  name,
  avatar,
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
            <i className="fas fa-user"></i> {match.params.name}
          </p>
        </div>

        <div className="card-body bg-dark text-light">
          {match.params.id === user._id && (
            <img
              src={user.avatar}
              className="img-thumbnail w-25 h-25"
              alt="..."
            />
          )}

          {profile !== null ? (
            <div>
              {match.params.id === user._id && (
                <div className="m-3">
                  <Link to="/edit-profile" className="btn btn-primary mx-3">
                    Edit Account
                  </Link>
                  <button
                    className="btn btn-danger mx-3"
                    onClick={deleteAccount}
                  >
                    Delete Account
                  </button>
                </div>
              )}
              <ProfileItem profile={profile} />
            </div>
          ) : (
            <Fragment>
              <p className="fs-5 text-secondary p-1">
                User hasn't setUp Profile yet...First add the profile
              </p>
              {match.params.id === user._id && (
                <div className="m-2">
                  <Link to="/create-profile" className="btn btn-primary mx-3">
                    Create Profile
                  </Link>
                  <button
                    className="btn btn-danger mx-3"
                    onClick={deleteAccount}
                  >
                    Delete Account
                  </button>
                </div>
              )}
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
  deleteAccount: PropTypes.func.isRequired,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById, deleteAccount })(
  Profile
);

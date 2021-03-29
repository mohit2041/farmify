import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileById, deleteAccount } from "../../actions/profile";
import { getUserItems, getOfferItems } from "../../actions/item";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import Item from "../items/Item";
import classes from "./profile.module.css";

const Profile = ({
  profile: { loading, profile },
  auth: { user },
  item,
  getProfileById,
  deleteAccount,
  match,
  getUserItems,
  getOfferItems,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    getUserItems(match.params.id);
    getOfferItems(match.params.id);
  }, [getProfileById, getUserItems, getOfferItems, match.params.id]);

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
                  <Link to="/edit-profile" className={classes.myLink}>
                    Edit Account
                  </Link>
                  <button className={classes.myButton} onClick={deleteAccount}>
                    Delete Account
                  </button>
                </div>
              )}
              <ProfileItem profile={profile} />
            </div>
          ) : (
            <Fragment>
              <p className="fs-5 text-info p-1">
                User hasn't setUp Profile yet...
              </p>
              {match.params.id === user._id && (
                <div className="m-2">
                  <Link to="/create-profile" className={classes.myLink}>
                    Create Profile
                  </Link>
                  <button className={classes.myButton} onClick={deleteAccount}>
                    Delete Account
                  </button>
                </div>
              )}
            </Fragment>
          )}
        </div>
      </div>
      {/* selling items of a user */}
      <div className="container my-5">
        {item.loading === true ? (
          <Spinner />
        ) : (
          <Fragment>
            {item.items.length === 0 ? (
              <div className="text-center text-info my-4 border-bottom border-dark">
                <h1>No items have been put up for sale yet</h1>
              </div>
            ) : (
              <Fragment>
                <div className="text-center text-info my-4 border-bottom border-dark">
                  <h1>Items put on sale</h1>
                </div>
                <div className="row">
                  {item.items.map((item) => (
                    <Item key={item._id} item={item} />
                  ))}
                </div>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
      {/* items on which user has made offer */}
      {match.params.id === user._id && (
        <div className="container my-5">
          {item.loading === true ? (
            <Spinner />
          ) : (
            <Fragment>
              {item.offers.length === 0 ? (
                <div className="text-center text-info my-4 border-bottom border-dark">
                  <h1>No offers made yet</h1>
                </div>
              ) : (
                <Fragment>
                  <div className="text-center text-info my-4 border-bottom border-dark">
                    <h1>Items on which you have made offer</h1>
                  </div>
                  <div className="row">
                    {item.offers.map((item) => (
                      <Item key={item._id} item={item} />
                    ))}
                  </div>
                </Fragment>
              )}
            </Fragment>
          )}
        </div>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  getUserItems: PropTypes.func.isRequired,
  getOfferItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  item: state.item,
});

export default connect(mapStateToProps, {
  getProfileById,
  deleteAccount,
  getUserItems,
  getOfferItems,
})(Profile);

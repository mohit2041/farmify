import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { withRouter } from "react-router-dom";
import Spinner from "../layout/Spinner";

const CreateProfile = ({
  createProfile,
  getCurrentProfile,
  history,
  profile: { profile, loading },
}) => {
  const [formData, setFormData] = useState({
    mobile: "",
    gmail: "",
    state: "",
    district: "",
    address: "",
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      ...formData,
      mobile: loading || !profile.mobile ? "" : profile.mobile,
      gmail: loading || !profile.gmail ? "" : profile.gmail,
      state: loading || !profile.state ? "" : profile.state,
      district: loading || !profile.district ? "" : profile.district,
      address: loading || !profile.address ? "" : profile.address,
    });
  }, [getCurrentProfile, loading]);

  const { mobile, gmail, state, district, address } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return loading === true ? (
    <Spinner />
  ) : (
    <Fragment>
      <div
        className="d-flex p-2 bd-highlight justify-content-center align-items-center"
        style={{ marginTop: "50px" }}
      >
        <form onSubmit={onSubmit}>
          <p className="fs-3 text-light bg-dark">
            ---------------- * Fields are compulsory ----------------{" "}
          </p>
          <div className="form-group my-3">
            <input
              type="text"
              placeholder="Mobile Number*"
              className="form-control"
              name="mobile"
              value={mobile}
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="email"
              placeholder="Gmail ID"
              className="form-control"
              name="gmail"
              value={gmail}
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              placeholder="State*"
              className="form-control"
              name="state"
              value={state}
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              placeholder="District*"
              className="form-control"
              name="district"
              value={district}
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              placeholder="Address*"
              className="form-control"
              name="address"
              value={address}
              onChange={onChange}
            />
          </div>
          <div className="d-flex justify-content-center my-input">
            <input type="submit" className="btn btn-success" value="Save" />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);

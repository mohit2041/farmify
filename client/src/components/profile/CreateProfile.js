import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import { withRouter } from "react-router-dom";

const CreateProfile = ({ auth: { user }, createProfile, history }) => {
  const [formData, setFormData] = useState({
    mobile: "",
    gmail: "",
    state: "",
    district: "",
    address: "",
  });

  const { mobile, gmail, state, district, address } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, user);
  };
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="d-flex bd-highlight justify-content-center align-items-center">
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
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);

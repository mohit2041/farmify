import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem } from "../../actions/item";

const CreateItem = ({ addItem, history }) => {
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    quantity: 0,
    price: 0,
    quality: "",
  });

  const { category, subcategory, quantity, price, quality } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(formData, history);
  };

  return (
    <div className="d-flex bd-highlight justify-content-center align-items-center">
      <form onSubmit={onSubmit}>
        <p className="fs-3 text-light bg-dark">
          ---------------- * Fields are compulsory ----------------{" "}
        </p>
        <div className="form-group my-3">
          <input
            type="text"
            placeholder="Category*"
            className="form-control"
            name="category"
            value={category}
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <input
            type="text"
            placeholder="Subcategory*"
            className="form-control"
            name="subcategory"
            value={subcategory}
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <input
            type="Number"
            placeholder="Quantity* (per kg)"
            className="form-control"
            name="quantity"
            value={quantity}
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <input
            type="Number"
            placeholder="Price* (per kg)"
            className="form-control"
            name="price"
            value={price}
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <input
            type="text"
            placeholder="Quality* e.g seed type,fertiliser quality etc"
            className="form-control"
            name="quality"
            value={quality}
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

CreateItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default connect(null, { addItem })(withRouter(CreateItem));

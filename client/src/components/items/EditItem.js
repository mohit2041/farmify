import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItem, editItem } from "../../actions/item";
import Spinner from "../layout/Spinner";

const EditItem = ({ editItem, getItem, item: { loading, item }, match }) => {
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    quantity: "",
    price: "",
    quality: "",
  });

  useEffect(() => {
    getItem(match.params.id);

    setFormData({
      ...formData,

      category: loading || !item.category ? "" : item.category,
      subcategory: loading || !item.subcategory ? "" : item.subcategory,
      quantity: loading || !item.quantity ? "" : item.quantity,
      price: loading || !item.price ? "" : item.price,
      quality: loading || !item.quality ? "" : item.quality,
    });
  }, [getItem, match.params.id]);

  const { category, subcategory, quantity, price, quality } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editItem(formData, match.params.id);
  };

  return loading === true ? (
    <Spinner />
  ) : (
    <div className="d-flex bd-highlight justify-content-center align-items-center">
      <form onSubmit={onSubmit}>
        <p className="fs-3 text-light bg-dark">
          -------* Fields are compulsory -------{" "}
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
            type="number"
            placeholder="Quantity* (per kg)"
            className="form-control"
            name="quantity"
            value={quantity}
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <input
            type="number"
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

EditItem.propTypes = {
  editItem: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired,
  item: PropTypes.object,
};
const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItem, editItem })(EditItem);

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemDetails = ({ item }) => {
  return (
    <Fragment>
      <div className="card-header bg-transparent border-success">
        <div className="my-2">
          <Link to={`/item/${item._id}`} className="btn btn-primary">
            View Item
          </Link>
        </div>
        <h6>
          <span className="font-weight-bold text-info">Category : </span>
          {item.category}
        </h6>
        <h6>
          <span className="font-weight-bold text-info">Subcategory : </span>
          {item.subcategory}
        </h6>
      </div>
      <div className="card-body">
        <h5 className="card-title">Other Details</h5>
        <h6>
          <span className="font-weight-bold text-info">Quality : </span>
          {item.quality}
        </h6>

        <h6>
          <span className="font-weight-bold text-info">Quantity : </span>
          {item.quantity}
          {" kg"}
        </h6>

        <h6>
          <span className="font-weight-bold text-info">
            Price (per kg) : Rs{" "}
          </span>
          {item.price}
        </h6>
        {item.detail && <p className="card-text">{item.detail}</p>}
      </div>
    </Fragment>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemDetails;

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
          <span className="font-weight-bold text-info fs-4">Category : </span>
          {item.category}
        </h6>
        <h4>{item.subcategory}</h4>
      </div>
      <div className="card-body">
        <h6>
          <span className="font-weight-bold text-info fs-4">Quantity : </span>
          {item.quantity}
          {" kg"}
        </h6>

        <h6>
          <span className="font-weight-bold text-info fs-4">
            Price (per kg) :
          </span>
          {" Rs "}
          {item.price}
        </h6>
      </div>
    </Fragment>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemDetails;

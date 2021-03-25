import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "./itemDetails.module.css";

const ItemDetails = ({ item }) => {
  return (
    <Fragment>
      <div className="card-header bg-transparent border-success">
        <div className="my-2">
          <Link to={`/item/${item._id}`} className="btn btn-primary">
            View Item
          </Link>
        </div>
        <h5>
          <span className="font-weight-bold text-info ">Category : </span>
          {item.category}
        </h5>
        <h4>{item.subcategory}</h4>
      </div>
      <div className="card-body">
        <h5>
          <span className="font-weight-bold text-info">Quantity : </span>
          {item.quantity}
          {" kg/L"}
        </h5>

        <h5>
          <span className="font-weight-bold text-info">Price (per kg/L) :</span>
          {" Rs "}
          {item.price}
        </h5>
      </div>
    </Fragment>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemDetails;

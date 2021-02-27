import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col">
      <div className="card border-success text-white bg-dark mb-3">
        <div className="card-header bg-transparent border-success">
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

        <div className="d-flex justify-content-between card-footer bg-transparent border-success">
          <div className="font-weight-bold text-info">
            Seller :
            <Link to={`/profile/${item.seller}/${item.user}`}>
              {item.seller}
            </Link>
          </div>
          <div>
            <i className="fas fa-eye"></i>
            {" " + item.views.length}
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;

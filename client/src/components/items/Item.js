import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import ItemDetails from "./ItemDetails";

const Item = ({ item }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card border-success text-white bg-dark mb-3 ">
        <ItemDetails item={item} />

        <div className="d-flex justify-content-between card-footer bg-transparent border-success">
          <div className="font-weight-bold text-info">
            Seller :
            <Link
              to={`/profile/${item.seller}/${item.user}`}
              className="btn btn-primary mx-1"
            >
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

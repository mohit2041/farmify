import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Items from "../items/Items";
import { Link } from "react-router-dom";

const Shop = (props) => {
  return (
    <Fragment>
      <div className="container">
        <div className="m-4">
          <Link to="/create-item" className="btn btn-primary">
            Sell
          </Link>
        </div>
        <Items />
      </div>
    </Fragment>
  );
};

Shop.propTypes = {};

export default Shop;

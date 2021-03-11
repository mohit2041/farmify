import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import Item from "./Item";

const Items = ({ items }) => {
  return items.length === 0 ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Items.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Items;

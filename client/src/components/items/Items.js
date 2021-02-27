import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/item";
import Spinner from "../layout/Spinner";
import Item from "./Item";

const Items = ({ getItems, item: { loading, items } }) => {
  useEffect(() => {
    getItems();
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container">
        <div className="row row-cols-4">
          {items.map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Items.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Items);

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getItem, addView, deleteItem } from "../../actions/item";
import Spinner from "../layout/Spinner";

const ItemDisplay = ({
  getItem,
  addView,
  deleteItem,
  match,
  auth: { user },
  item: { item },
  history,
}) => {
  useEffect(() => {
    getItem(match.params.id);
    addView(match.params.id);
  }, [getItem, addView, match.params.id]);
  return item === null ? (
    <Spinner />
  ) : (
    <div className="card text-left">
      <div className="card-header">
        {user !== null && user._id === item.user && (
          <div className="my-4">
            <Link to={`/edit-item/${item._id}`} className="btn btn-primary">
              Edit
            </Link>
            <button
              className="btn btn-danger mx-3"
              onClick={() => deleteItem(match.params.id, history)}
            >
              Remove
            </button>
          </div>
        )}
        <h4>
          <span className="font-weight-bold text-info fs-2">
            Commodity Category :{" "}
          </span>
          {item.category}
        </h4>
        <h4>
          <span className="font-weight-bold text-info fs-2">
            Commodity Subcategory :{" "}
          </span>
          {item.subcategory}
        </h4>
      </div>

      <div className="card-body bg-dark text-light">
        <h1 className="card-title">Other Details</h1>
        <h4>
          <span className="font-weight-bold text-info fs-2">
            Quality Description :{" "}
          </span>
          {item.quality}
        </h4>

        <h4>
          <span className="font-weight-bold text-info fs-2">
            Available Quantity :{" "}
          </span>
          {item.quantity}
          {" kg"}
        </h4>

        <h4>
          <span className="font-weight-bold text-info fs-2">
            Price (per kg) :
          </span>
          {" Rs "}
          {item.price}
        </h4>
        {item.detail && <p className="card-text">{item.detail}</p>}
      </div>
    </div>
  );
};

ItemDisplay.propTypes = {
  getItem: PropTypes.func.isRequired,
  addView: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object,
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
});

export default connect(mapStateToProps, { getItem, addView, deleteItem })(
  withRouter(ItemDisplay)
);

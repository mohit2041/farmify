import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getItem, addView, deleteItem, getUserOffer } from "../../actions/item";
import Spinner from "../layout/Spinner";
import Offer from "./Offer";
import ItemOffer from "./ItemOffer";
import classes from "./itemDisplay.module.css";

const ItemDisplay = ({
  getItem,
  addView,
  deleteItem,
  getUserOffer,
  match,
  auth: { user, loading },
  item: { item, offer },
  history,
}) => {
  useEffect(() => {
    getItem(match.params.id);
    addView(match.params.id);
    getUserOffer(match.params.id);
  }, [getItem, addView, getUserOffer, match.params.id]);

  // if (offer !== null) console.log(offer);

  // offer made on the item
  let offersOnItem = null;

  if (user !== null && item !== null && user._id === item.user) {
    offersOnItem =
      item.offers.length === 0 ? (
        <h1 className="card-title border-bottom border-dark my-5 text-center">
          No offers on this item yet.
        </h1>
      ) : (
        <Fragment>
          <h1 className="card-title border-bottom border-dark my-5 text-center">
            Offers made on the item
          </h1>
          <div className="row">
            {item.offers.map((offer) => (
              <ItemOffer offer={offer} key={offer._id} />
            ))}
          </div>
        </Fragment>
      );
  }

  return item === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="card text-left">
        <div className="card-header">
          {loading === false && user._id === item.user && (
            <div className="my-4">
              <Link
                to={`/edit-item/${item._id}`}
                className="btn btn-primary border border-dark"
              >
                Edit
              </Link>
              <button
                className="btn btn-danger mx-3 border border-dark"
                onClick={() =>
                  deleteItem(match.params.id, user._id, user.name, history)
                }
              >
                Remove
              </button>
            </div>
          )}
          <h4>
            <span className="font-weight-bold text-info">
              Commodity Category :{" "}
            </span>
            {item.category}
          </h4>
          <h4>
            <span className="font-weight-bold text-info">
              Commodity Subcategory :{" "}
            </span>
            {item.subcategory}
          </h4>
        </div>

        <div className="card-body bg-dark text-light">
          <div>
            <h1 className="card-title border-bottom border-light">
              Other Details
            </h1>
            <h4>
              <span className="font-weight-bold text-info">
                Quality Description :{" "}
              </span>
              {item.quality}
            </h4>

            <h4>
              <span className="font-weight-bold text-info">
                Available Quantity :{" "}
              </span>
              {item.quantity}
              {" kg/L"}
            </h4>

            <h4>
              <span className="font-weight-bold text-info">
                Price (per kg/L) :
              </span>
              {" Rs "}
              {item.price}
            </h4>
            {item.detail && <p className="card-text">{item.detail}</p>}
          </div>
          {/* input for making offer */}
          {user !== null && item !== null && (
            <Offer item={item} user={user} offer={offer} />
          )}
        </div>
      </div>
      {/* offers made on item */}
      <div className="container my-3">{offersOnItem}</div>
    </Fragment>
  );
};

ItemDisplay.propTypes = {
  getItem: PropTypes.func.isRequired,
  addView: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  getUserOffer: PropTypes.func.isRequired,
  item: PropTypes.object,
  auth: PropTypes.object,
  offer: PropTypes.object,
};

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getItem,
  addView,
  deleteItem,
  getUserOffer,
})(withRouter(ItemDisplay));

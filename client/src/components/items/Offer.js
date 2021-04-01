import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addOffer, deleteOffer } from "../../actions/item";
import formatDate from "../../utils/formatDate";

const Offer = ({ user, item, offer, addOffer, deleteOffer }) => {
  const [toggleOffer, offerHandler] = useState(false);
  const [formData, setFormData] = useState({
    offerPrice: "",
  });

  const { offerPrice } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addOffer(formData, item._id);
  };

  let makeOffer = null;
  let removeOffer = null;
  let sellerInfo = null;

  if (user._id !== item.user) {
    // if logged in user is not the seller of item then show all below info
    sellerInfo = (
      <div className="my-4">
        <h1 className="card-title border-bottom border-light">Seller</h1>
        <span className="font-weight-bold text-info">Link to Profile : </span>
        <Link
          to={`/profile/${item.seller}/${item.user}`}
          className="btn btn-primary mx-2 border border-light"
        >
          {item.seller}
        </Link>
      </div>
    );

    if (offer !== null) {
      // console.log(offer);
      removeOffer = (
        <div className="my-3">
          <h1 className="card-title border-bottom border-light">
            You've already made an offer
          </h1>
          <h4>
            <span className="font-weight-bold text-info">Offer Price :</span>
            {" Rs "} {offer.offerPrice}
          </h4>
          <h4>
            <span className="font-weight-bold text-info">Offered on : </span>
            {formatDate(offer.offerDate)}
          </h4>
          <button
            className="btn btn-primary border border-light my-1"
            onClick={() => deleteOffer(item._id)}
          >
            Remove Offer
          </button>
        </div>
      );
    } else {
      makeOffer = (
        <div className="my-3">
          <button
            className="btn btn-primary border border-light"
            onClick={() => offerHandler(!toggleOffer)}
          >
            Offer Price
          </button>
          {toggleOffer && (
            <div className="my-3">
              <h1 className="card-title border-bottom border-light">
                Make an offer
              </h1>
              <div className="form-group my-3">
                <input
                  type="number"
                  placeholder="offer a reasonable price"
                  className="form-control"
                  name="offerPrice"
                  value={offerPrice}
                  onChange={onChange}
                />
              </div>
              <button
                className="btn btn-primary border border-light"
                onClick={onSubmit}
              >
                Offer
              </button>
            </div>
          )}
        </div>
      );
    }
  }
  return (
    <Fragment>
      {/* seller info */}
      {sellerInfo}
      {/* make/remove a offer */}
      {makeOffer}
      {removeOffer}
    </Fragment>
  );
};

Offer.propTypes = {
  user: PropTypes.object,
  item: PropTypes.object,
  offer: PropTypes.object,
  deleteOffer: PropTypes.func.isRequired,
  addOffer: PropTypes.func.isRequired,
};

export default connect(null, { deleteOffer, addOffer })(Offer);

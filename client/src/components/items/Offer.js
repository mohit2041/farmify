import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Offer = ({ user, item }) => {
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
    console.log(offerPrice);
  };
  return (
    user !== null &&
    user._id !== item.user && (
      <Fragment>
        {/* seller info */}
        <div className="my-4">
          <h1 className="card-title border-bottom border-light">Seller</h1>
          <span className="font-weight-bold text-info fs-2">
            Link to Profile :{" "}
          </span>
          <Link
            to={`/profile/${item.seller}/${item.user}`}
            className="btn btn-primary mx-2 border border-light"
          >
            {item.seller}
          </Link>
        </div>
        {/* make a offer */}
        <div className="my-4">
          <button
            className="btn btn-primary border border-light"
            onClick={() => offerHandler(!toggleOffer)}
          >
            Offer Price
          </button>
          {toggleOffer && (
            <div className="my-3">
              <h1 className="card-title border-bottom border-light">
                Make a Offer
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
      </Fragment>
    )
  );
};

Offer.propTypes = {
  user: PropTypes.object,
  item: PropTypes.object,
};

export default Offer;

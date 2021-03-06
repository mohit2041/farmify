import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";
import { Link } from "react-router-dom";

const ItemOffer = ({ offer }) => {
  return (
    <div className="col">
      <div className="card border-success text-white bg-dark mb-3">
        <div className="card-header bg-transparent border-success">
          <div className="my-2 font-weight-bold text-info">
            Offer maker :{" "}
            <Link
              to={`/profile/${offer.user.name}/${offer.user._id}`}
              className="btn btn-primary"
            >
              Profile
            </Link>
          </div>
        </div>
        <div className="card-body">
          <h6>
            <span className="font-weight-bold text-info fs-4">
              Offered Price :{" "}
            </span>
            {"Rs "}
            {offer.offerPrice}
          </h6>

          <h6>
            <span className="font-weight-bold text-info fs-4">
              Date of Offer :{" "}
            </span>
            {formatDate(offer.offerDate)}
          </h6>
        </div>
      </div>
    </div>
  );
};

ItemOffer.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default ItemOffer;

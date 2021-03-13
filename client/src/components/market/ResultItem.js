import React from "react";
import PropTypes from "prop-types";

const ResultItem = ({ result }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      {/* col-md-4 */}
      <div className="card border-success text-white bg-dark mb-3">
        <div className="card-header bg-transparent border-success">
          <h5>
            <span className="font-weight-bold text-info fs-4">Date : </span>
            {result.arrival_date}
          </h5>
          <h4>{result.commodity}</h4>
        </div>
        <div className="card-body">
          <h5>
            <span className="font-weight-bold text-info fs-4">State : </span>
            {result.state}
          </h5>
          <h5>
            <span className="font-weight-bold text-info fs-4">District : </span>
            {result.district}
          </h5>
          <h5>
            <span className="font-weight-bold text-info fs-4">Market : </span>
            {result.market}
          </h5>
        </div>
        <div className="d-flex justify-content-between card-footer bg-transparent border-success">
          <h5>
            <span className="font-weight-bold text-info fs-4">
              Price Range :{" "}
            </span>
            {" Rs "}
            {result.min_price}
            {"-"}
            {result.max_price}
          </h5>
        </div>
      </div>
    </div>
  );
};

ResultItem.propTypes = {
  result: PropTypes.object.isRequired,
};

export default ResultItem;

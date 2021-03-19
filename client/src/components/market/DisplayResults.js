import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ResultItem from "./ResultItem";

const DisplayResults = ({ market: { results, isFormSubmitted } }) => {
  return (
    <Fragment>
      {isFormSubmitted === false ? (
        <Spinner />
      ) : (
        <Fragment>
          {results !== null && results.records.length === 0 ? (
            <div>No data found</div>
          ) : (
            <Fragment>
              <div className="container">
                <div className="row">
                  {results.records.map((result, index) => (
                    <ResultItem key={index} result={result} />
                  ))}
                </div>
              </div>
              <div className="container d-flex justify-content-center mt-3">
                <button className="btn btn-success mx-3">Previous</button>
                <button className="btn btn-success mx-3">Next</button>
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

DisplayResults.propTypes = {
  market: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  market: state.market,
});

export default connect(mapStateToProps)(DisplayResults);

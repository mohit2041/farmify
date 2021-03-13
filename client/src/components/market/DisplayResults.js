import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ResultItem from "./ResultItem";

const DisplayResults = ({ market: { results } }) => {
  return (
    <Fragment>
      {results.length === 0 ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="container">
            <div className="row">
              {results.map((result, index) => (
                <ResultItem key={index} result={result} />
              ))}
            </div>
          </div>
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

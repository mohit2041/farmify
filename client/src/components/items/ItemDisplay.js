import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItem } from "../../actions/item";

const ItemDisplay = ({ getItem, match }) => {
  useEffect(() => {
    getItem(match.params.id);
  });
  return <div>Item display</div>;
};

ItemDisplay.propTypes = {
  getItem: PropTypes.func.isRequired,
};

export default connect(null, { getItem })(ItemDisplay);

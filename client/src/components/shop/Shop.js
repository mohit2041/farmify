import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Items from "../items/Items";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../../actions/item";

const Shop = ({ getItems, item: { items } }) => {
  useEffect(() => {
    getItems();
  }, []);

  const [queryData, setQueryData] = useState({
    query: "",
  });

  const { query } = queryData;

  const onChange = (e) => {
    setQueryData({
      ...queryData,
      [e.target.name]: e.target.value,
    });
  };

  const searchItems = (items) => {
    const searchFields = items.length > 0 && Object.keys(items[0]);

    return items.filter(
      (itemEle) =>
        itemEle.category.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        itemEle.subcategory.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        itemEle.seller.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };
  // searched items
  let reqItems = searchItems(items);

  return (
    <Fragment>
      <div className="container">
        <div className="container d-flex justify-content-between mb-5">
          <div>
            <Link
              to="/create-item"
              className="btn btn-primary border border-dark"
            >
              Sell
            </Link>
          </div>
          {/* search box for filtering items */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Search for sub/category,seller etc."
              className="form-control form-control-lg border border-red"
              name="query"
              value={query}
              onChange={onChange}
            />
          </div>
        </div>

        {reqItems.length === 0 ? (
          <Items items={items} />
        ) : (
          <Items items={reqItems} />
        )}
      </div>
    </Fragment>
  );
};

Shop.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Shop);

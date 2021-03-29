import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem } from "../../actions/item";
import classes from "../../global-css/global.module.css";

const CreateItem = ({ addItem, history }) => {
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    quantity: "",
    price: "",
    quality: "",
  });

  const { category, subcategory, quantity, price, quality } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(formData, history);
  };

  const categories = [
    {
      category: "Cereals",
      subcategory: ["Amphophalus", "Bajra", "Maize", "Paddy", "Rice", "Wheat"],
    },
    {
      category: "Pulses",
      subcategory: [
        "Arhar (Red Gram)",
        "Arhar",
        "Beans",
        "Gram Dal (Chana)",
        "Black Gram (Urd)",
        "Cowpea (Lobia)",
        "Green Gram (Moong)",
        "Lentil (Masur)",
      ],
    },
    {
      category: "Oil Seeds",
      subcategory: ["Mustard"],
    },
    {
      category: "Fibre Crops",
      subcategory: ["Cotton", "Jute"],
    },
    {
      category: "Fruits",
      subcategory: [
        "Apple",
        "Banana",
        "Grapes",
        "Guava",
        "Jack Fruit",
        "Mousambi(Sweet Lime)",
        "Papaya",
        "Pineapple",
        "Pomegranate",
      ],
    },
    {
      category: "Vegetables",
      subcategory: [
        "Amaranthus",
        "Ashgourd",
        "Banana Green",
        "Beetroot",
        "Bhindi(Ladies Finger)",
        "Bitter gourd",
        "Bottle gourd",
        "Brinjal",
        "Cabbage",
        "Capsicum",
        "Carrot",
        "Cauliflower",
        "Cluster beans",
        "Colacasia",
        "Coriander(Leaves)",
        "Cowpea(Veg)",
        "Cucumbar(Kheera)",
        "Drumstick",
        "Field Pea",
        "French Beans (Frasbean)",
        "Ginger(Green)",
        "Green Avare (W)",
        "Green Chilli",
        "Guar",
        "Knool Khol",
        "Lemon",
        "Mango (Raw-Ripe)",
        "Methi(Leaves)",
        "Onion",
        "Peas Wet",
        "Potato",
        "Pumpkin",
        "Raddish",
        "Ridge gourd(Tori)",
        "Seemebadnekai",
        "Snake gourd",
        "Suvarna Gadde",
        "Sweet Pumpkin",
        "Tapioca",
        "Tomato",
      ],
    },
    {
      category: "Spices",
      subcategory: [
        "Black pepper",
        "Coconut",
        "Garlic",
        "Ginger(Dry)",
        "Turmeric",
      ],
    },
    {
      category: "Others",
      subcategory: ["Broken Rice", "Gur(Jaggery)", "Sugar"],
    },
  ];
  let reqCategory = null;

  if (category !== "") {
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].category === category) {
        reqCategory = categories[i];
        break;
      }
    }
  }

  return (
    <div className="d-flex bd-highlight justify-content-center align-items-center">
      <form onSubmit={onSubmit}>
        <p className={"text-light bg-dark " + classes.myHeading}>
          ----------* Fields are compulsory ----------{" "}
        </p>
        <div className="form-group my-3">
          <select
            className="form-control custom-select"
            name="category"
            value={category}
            onChange={onChange}
          >
            <option defaultValue>Category*</option>
            {categories.map((ele, index) => (
              <option key={index}>{ele.category}</option>
            ))}
          </select>
        </div>
        <div className="form-group my-3">
          {reqCategory === null ? (
            <Fragment>
              <select className="form-control custom-select">
                <option defaultValue>Subcategory*</option>
              </select>
            </Fragment>
          ) : (
            <Fragment>
              <select
                className="form-control custom-select"
                name="subcategory"
                value={subcategory}
                onChange={onChange}
              >
                <option defaultValue>Subcategory*</option>
                {reqCategory.subcategory.map((ele, index) => (
                  <option key={index}>{ele}</option>
                ))}
              </select>
            </Fragment>
          )}
        </div>
        <div className="form-group my-3">
          <input
            type="number"
            placeholder="Quantity* (kg/L)"
            className="form-control"
            name="quantity"
            value={quantity}
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <input
            type="number"
            placeholder="Price* (per kg/L)"
            className="form-control"
            name="price"
            value={price}
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <input
            type="text"
            placeholder="Quality* e.g seed type,fertiliser quality etc"
            className="form-control"
            name="quality"
            value={quality}
            onChange={onChange}
          />
        </div>
        <div className="d-flex justify-content-center my-input">
          <input type="submit" className="btn btn-success" value="Save" />
        </div>
      </form>
    </div>
  );
};

CreateItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default connect(null, { addItem })(withRouter(CreateItem));

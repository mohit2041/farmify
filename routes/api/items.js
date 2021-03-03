const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Item = require("../../model/Item");
const User = require("../../model/User");

// @route    POST api/items
// @desc     create item to sell
// @access   Private
router.post(
  "/",
  [
    auth,
    check("category", "category is required").notEmpty(),
    check("subcategory", "subcategory is required").notEmpty(),
    check("quantity", "please mention the quantity").notEmpty(),
    check("quality", "quality description is required").notEmpty(),
    check("price", "please mention a price").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newItem = new Item({
        category: req.body.category,
        subcategory: req.body.subcategory,
        quantity: req.body.quantity,
        quality: req.body.quality,
        price: req.body.price,
        seller: user.name,
        avatar: user.avatar,
        user: req.user.id,
        views: [],
      });

      const item = await newItem.save();

      res.json(item);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    POST api/items/:id
// @desc     edit item
// @access   Private
router.post("/:id", [auth], async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);

    // if item found
    if (item) {
      item = await Item.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      return res.json(item);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/items
// @desc     Get all items
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const items = await Item.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/items/:id
// @desc     Get item by ID
// @access   Private
router.get("/:id", auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: "item not found" });
    }

    res.json(item);
  } catch (err) {
    // if id is not the type of ObjectId we want the message 'item not found'
    if (err.kind == "ObjectId") {
      return res
        .status(400)
        .json({ msg: "item not found , check itemID is correct?" });
    }
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    GET api/items/user/:userID
// @desc     Get items by userID
// @access   Private
router.get("/user/:userID", auth, async (req, res) => {
  try {
    const items = await Item.find({ user: req.params.userID });

    if (!items) {
      return res.status(404).json({ msg: "items not found" });
    }

    res.json(items);
  } catch (err) {
    // if id is not the type of ObjectId we want the message 'item not found'
    if (err.kind == "ObjectId") {
      return res
        .status(400)
        .json({ msg: "items not found , check userID is correct?" });
    }
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/items/:id
// @desc     Delete a item
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: "item not found" });
    }

    // Check user authorization
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await item.remove();

    res.json({ msg: "item removed" });
  } catch (err) {
    // if id is not the type of ObjectId
    if (err.kind == "ObjectId") {
      return res
        .status(400)
        .json({ msg: "item not found , check params-ID is correct?" });
    }
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    PUT api/items/view/:id
// @desc     add a view to item
// @access   Private
router.put("/view/:id", auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    // Check if the item has already been viewed
    if (
      item.views.filter((view) => view.user.toString() === req.user.id)
        .length === 0
    ) {
      item.views.unshift({ user: req.user.id });
    }

    await item.save();

    return res.json(item.views);
  } catch (err) {
    // if id is not the type of ObjectId
    if (err.kind == "ObjectId") {
      return res
        .status(400)
        .json({ msg: "item not found , check params-ID is correct?" });
    }

    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

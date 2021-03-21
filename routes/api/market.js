const express = require("express");
const router = express.Router();
const axios = require("axios");
const { json } = require("express");

// @route    get api/market
// @desc     get market results
// @access   Public

router.get("/", async (req, res) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Conrtol-Allow-Headers": "*",
      },
    };
    const url = req.query.url;
    const results = await axios.get(url, config);
    res.json(results.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

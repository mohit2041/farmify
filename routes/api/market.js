const express = require("express");
const router = express.Router();
const axios = require("axios");

const API_KEY = "579b464db66ec23bdd000001e44d2fbb84de480149294a166d98e108";

// @route    get api/market
// @desc     get market results
// @access   Public

const getResults = async () => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Conrtol-Allow-Headers": "*",
      },
    };
    const results = await axios.get(
      "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001e44d2fbb84de480149294a166d98e108&format=json&offset=5&limit=20",
      config
    );
    res.json(results);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// router.get("/", async (req, res) => {
//   try {
//     const config = {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Conrtol-Allow-Headers": "*",
//       },
//     };

//     // let query = "";
//     // if (formData.state !== "") {
//     //   query = query + "&filters[state]=" + formData.state;
//     //   if (formData.district !== "") {
//     //     query = query + "&filters[district]=" + formData.district;
//     //   }
//     // }

//     // if (formData.commodity !== "") {
//     //   query = query + "&filters[commodity]=" + formData.commodity;
//     // }

//     // let url =
//     //   "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=" +
//     //   API_KEY +
//     //   "&format=json&offset=" +
//     //   offset +
//     //   "&limit=9" +
//     //   query;

//     const results = await axios.get(
//       "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001e44d2fbb84de480149294a166d98e108&format=json&offset=5&limit=20",
//       config
//     );
//     res.json(results);

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

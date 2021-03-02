const express = require("express");
const router = express.Router();

// const request = require("request");
const { check, validationResult } = require("express-validator");
const Profile = require("../../model/Profile");
const User = require("../../model/User");
const Item = require("../../model/Item");
const auth = require("../../middleware/auth");
const config = require("config");

// @route    GET api/profile/me
// @desc     Get current user's profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "profile not available" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  "/",
  auth,
  check("mobile", "mobile number is required").notEmpty(),
  check("state", "state is required").notEmpty(),
  check("district", "district is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructure the request
    const { mobile, gmail, about, state, district, address } = req.body;

    // build a profile object
    const profileFields = {
      user: req.user.id,
    };

    profileFields.selling = [];

    //adding rest of fields
    if (mobile) profileFields.mobile = mobile;
    if (gmail) profileFields.gmail = gmail;
    if (about) profileFields.about = about;
    if (state) profileFields.state = state;
    if (district) profileFields.district = district;
    if (address) profileFields.address = address;

    //adding selling items ?

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      // if profile found
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // creating profile

      profile = new Profile(profileFields);
      await profile.save();

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    return res.json(profile);
  } catch (err) {
    // if id is not the type of ObjectId we want the message 'profile not found'
    if (err.kind == "ObjectId") {
      return res
        .status(400)
        .json({ msg: "Profile not found,check ProfileID is correct?" });
    }

    console.error(err.message);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    DELETE api/profile
// @desc     delete logged in user and his profile
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    // deleting items
    await Item.deleteMany({ user: req.user.id });

    // deleting profile
    await Profile.findOneAndRemove({ user: req.user.id });

    // deleting user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "user deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

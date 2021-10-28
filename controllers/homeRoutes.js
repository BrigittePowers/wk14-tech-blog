//TODO: apply this code to what we need for the route
// an example of what a route should look like

const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    //serialize user data
    const users = userData.map((user) => user.get({ plain: true }));

    // pass serialized data into handlebars.js
    res.render("homepage", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

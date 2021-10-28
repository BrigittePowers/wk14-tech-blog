// TODO: an example of index.js controller

const router = require("express").Router();
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);

module.exports = router;

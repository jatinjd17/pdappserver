const express = require("express");

const router = express.Router();

const { searchbardata } = require("../controllers/searchbarcontroller");

router.get("/search", searchbardata);

module.exports = router;

const express = require("express");

const router = express.Router();

const {
  AnyproductanyCategory,
  ViewallAnyproductanyCategory,
} = require("../controllers/allproducts");

// router.get("/amazontablets", list);
router.get("/allproducts", AnyproductanyCategory);
router.get("/allproductsviewall", ViewallAnyproductanyCategory);

module.exports = router;

const express = require("express");

const router = express.Router();

const {
  trackproduct,
  trackallproductsbyuser,
  trackallproductsbyuseronlyproducts,
  deletetrackedproduct,
} = require("../controllers/trackproductcontroller");

router.post("/trackproduct", trackproduct);
router.get("/trackproductuser", trackallproductsbyuser);
router.get("/trackproductuseronlyproducts", trackallproductsbyuseronlyproducts);
router.get("/deletetrackedproduct", deletetrackedproduct);

module.exports = router;

const express = require("express");

const router = express.Router();

const {
  todaysdeal,
  todaysdealrandom,
  todaysdealbyCategory,
  todayproduct,
  todayproductrandom,
  todayproductbyCategory,
  weeklydeal,
  weeklydealrandom,
  weeklydealbyCategory,
  monthlydeal,
  monthlydealrandom,
  monthlydealbyCategory,
} = require("../controllers/dealscontroller");

// router.get("/amazontablets", list);
router.get("/todaysdeal", todaysdeal);
router.get("/todaysdealrandom", todaysdealrandom);
router.get("/todaysdealcat", todaysdealbyCategory);
router.get("/todayproduct", todayproduct);
router.get("/todayproductrandom", todayproductrandom);
router.get("/todayproductcat", todayproductbyCategory);
router.get("/weeklydeal", weeklydeal);
router.get("/weeklydealrandom", weeklydealrandom);
router.get("/weeklydealcat", weeklydealbyCategory);
router.get("/monthlydeal", monthlydeal);
router.get("/monthlydealrandom", monthlydealrandom);
router.get("/monthlydealcat", monthlydealbyCategory);

module.exports = router;

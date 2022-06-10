const mongoose = require("mongoose");

const todayproductchema = mongoose.Schema({
  producttitle: {
    type: String,
  },
  discountprice: {
    type: Number,
  },
  finalprice: {
    type: Number,
  },
  highestprice: {
    type: Number,
  },
  lowestprice: {
    type: Number,
  },
  percent: {
    type: Number,
  },
  platform: {
    type: String,
  },
  features: [
    {
      type: String,
    },
  ],
  imageurl: {
    type: String,
  },
  producturl: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model("today", todayproductchema, "today");

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      lowercase: true,
      unique: true,
      index: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 32,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    // trackedproducts: [
    //   {
    //     type: String,
    //   },
    // ],
    trackedproducts: [
      {
        product: String,
        price: Number,
        highestprice: Number,
        lowestprice: Number,
        percent: Number,
        platform: String,
        discountprice: Number,
        category: String,
        imageurl: String,
        producturl: String,
        mailsent: Boolean,
      },
    ],

    trackedprice: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

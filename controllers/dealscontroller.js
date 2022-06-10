const monthlydealmodel = require("../models/monthlydealmodel");
const todayproductmodel = require("../models/todayproductmodel");
const todaysdealmodel = require("../models/todaysdealmodel");
const weeklydealsmodel = require("../models/weeklydealsmodel");

exports.todaysdeal = (req, res) => {
  todaysdealmodel
    .find({})
    .select(
      "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    )
    .limit(40)
    // .sort({ percent: "desc" })
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.todaysdealrandom = (req, res) => {
  todaysdealmodel
    .aggregate([
      {
        $sample: { size: 4 },
      },
    ])
    // .select(
    //   "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    // )
    .sort({ finalprice: "desc" })
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.todaysdealbyCategory = (req, res) => {
  const resName = req.query.category;
  todaysdealmodel
    .find({ category: resName })
    .select(
      "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    )
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.todayproduct = (req, res) => {
  //   const resName = req.query.category;
  //   console.log(resName);
  todayproductmodel
    .find({})
    .select(
      "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    )
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.todayproductrandom = (req, res) => {
  //   const resName = req.query.category;
  //   console.log(resName);
  todayproductmodel
    .aggregate([{ $sample: { size: 8 } }])
    .sort({ percent: "desc" })
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.todayproductbyCategory = (req, res) => {
  const resName = req.query.category;
  //   console.log(resName);
  todayproductmodel
    .find({ category: resName })
    .select(
      "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    )
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.weeklydeal = (req, res) => {
  weeklydealsmodel
    .find({})
    .select(
      "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    )
    .limit(45)
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.weeklydealrandom = (req, res) => {
  weeklydealsmodel
    .aggregate([{ $sample: { size: 15 } }])
    .sort({ percent: "desc" })
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.weeklydealbyCategory = (req, res) => {
  const resName = req.query.category;
  weeklydealsmodel
    .find({ category: resName })
    .select(
      "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    )
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.monthlydeal = (req, res) => {
  monthlydealmodel
    .find({})
    .select(
      "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    )
    .limit(50)
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.monthlydealrandom = (req, res) => {
  monthlydealmodel
    .aggregate([{ $sample: { size: 20 } }])
    .sort({ percent: "desc" })
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

exports.monthlydealbyCategory = (req, res) => {
  const resName = req.query.category;
  monthlydealmodel
    .find({ category: resName })
    .select(
      "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    )
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      //   console.log(JSON.stringify(data));
      res.json(data);
    });
};

// const fk2tablets = require("../models/amazonpromodel");
const apphomeproducts = require("../models/allproductsmodel");

// exports.list = (req, res) => {
//   //   fk2tablets
//   //     .find({ pricechange: { $ne: "nochange" }, price: { $gt: 4990 } })
//   //     .select(
//   //       "_id product producttitle price pricechange ratings imageurl ratingsreviews info"
//   //     )
//   //     .exec((err, data) => {
//   //       if (err) {
//   //         return res.json({
//   //           error: errorHandler(err),
//   //         });
//   //       }
//   //       //   console.log(JSON.stringify(data));
//   //       res.json(data);
//   //     });

//   fk2tablets
//     .find({ platform: "Amazon" })
//     .select(
//       "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform"
//     )
//     .exec((err, data) => {
//       if (err) {
//         return res.json({
//           error: errorHandler(err),
//         });
//       }
//       //   console.log(JSON.stringify(data));
//       res.json(data);
//     });
// };

exports.AnyproductanyCategory = (req, res) => {
  const resName = req.query.category;
  const platformm = req.query.platform;
  const touppercasePlatform =
    platformm.charAt(0).toUpperCase() + platformm.slice(1);

  apphomeproducts
    .find({ category: resName, platform: touppercasePlatform })
    .select(
      "_id producttitle discountprice features finalprice highestprice imageurl lowestprice percent producturl platform category"
    )
    .limit(10)
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

exports.ViewallAnyproductanyCategory = (req, res) => {
  const resName = req.query.category;
  const platformm = req.query.platform;
  const touppercasePlatform =
    platformm.charAt(0).toUpperCase() + platformm.slice(1);

  apphomeproducts
    .find({ category: resName, platform: touppercasePlatform })
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

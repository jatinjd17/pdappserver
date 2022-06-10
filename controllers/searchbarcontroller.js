const apphomeproducts = require("../models/allproductsmodel");

exports.searchbardata = (req, res) => {
  console.log(req.query.id);
  const resName = req.query.id;
  console.log(resName);
  const resnamespecialcharremove = resName.replace(/[^a-zA-Z ]/g, "");

  //   const searchdata = await apphomeproducts.find({$text: {$search: resName}})

  //   res.render('searchdata', { searchdata });
  apphomeproducts
    .find({ producttitle: { $regex: resnamespecialcharremove, $options: "i" } })
    // .find({
    //   //   producttitle: { $regex: ".*" + resName + ".*" },
    //   producttitle: `/${resName}/`,
    // })
    .select(
      "producttitle imageurl category discountprice features finalprice highestprice lowestprice percent platform producturl"
    )
    .limit(10)
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      console.log(JSON.stringify(data));
      res.json(data);
    });
};

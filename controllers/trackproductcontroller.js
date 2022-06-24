const User = require("../models/usermodel");
const Formidable = require("formidable");
const { forEach } = require("p-iteration");

exports.trackproduct = async (req, res) => {
  const { productname1, username1 } = req.body;

  var prods = [];

  // console.log(username1);
  console.log(productname1);

  User.findOne({ username: username1 }).then((data) => {
    if (data) {
      // console.log(data.trackedproducts);
      data.trackedproducts.map((p, i) => {
        prods.push(p.product);
      });

      // console.log(prods);
      // console.log(prods.includes(productname1.product));

      if (prods.includes(productname1.product)) {
        // console.log("heheheheh");
        return res
          .status(401)
          .json({ error: "Tracked product Already exists" });
      } else {
        // console.log("ttttttttttttttttt");
        User.updateOne(
          { username: username1 },
          { $push: { trackedproducts: productname1 } }
        )
          .then((data) => {
            // console.log(data);
            return res.status(200).json({
              success: "Successfully Added to tracked Product",
            });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  });

  //   let form = new Formidable.IncomingForm();
  //   form.keepExtension = true;
  //   form.parse(req, (err, fields, files));
  //   let user = req.username1;
  //   console.log(fields);

  //   console.log(user);

  //////////////////////////////////////////////////////////////////////////////////////////////////

  // try {
  //   const isUser = await User.findOne({ username: username1 });
  //   console.log(isUser);

  //   if (!isUser) {
  //     return res.status(401).json({ error: "No User Found" });
  //   }

  //   isUser.trackedproducts.forEach((e) => {
  //     if (e.product === productname1.product) {
  //       return res
  //         .status(401)
  //         .json({ error: "Product already added in the list" });
  //     }
  //   });
  //   const updateproduct = await User.updateOne(
  //     { username: username1 },
  //     { $push: { trackedproducts: productname1 } }

  //     // await forEach(isUser.trackedproducts, (ee) => {
  //     //   isload = true;
  //     //   if (ee.product === productname1.product) {
  //     //     return res
  //     //       .status(401)
  //     //       .json({ error: "Product already added in the list" });
  //     //   }
  //     // });

  //     // if (isUser.trackedproducts.includes(productname1)) {
  //     //   return res
  //     //     .status(401)
  //     //     .json({ error: "Product already added in the list" });
  //     // }

  //     ///////////////////////////////////////////////////////
  //   );

  //   /////////////////////////////////////////////////

  //   return res.status(200).json({
  //     success: "Sucessfully added in db",
  //     updatedproduct: updateproduct,
  //   });

  //   // db.students.updateOne({ _id: 1 }, { $push: { scores: 89 } });

  //   // const isPassword = await bcrypt.compare(password, isUser.password);

  //   // if (!isPassword) {
  //   //   return res.status(401).json({ error: "inValid Credentials" });
  //   // }

  //   // const token = jwt.sign({ _id: isUser._id }, "secret", { expiresIn: "1d" });

  //   // res.cookie("token", token, { expiresIn: "1d" });

  //   // const { _id, username, name, email, role } = isUser;

  //   // return res.json({ token, user: { _id, username, name, email } });
  // } catch (e) {
  //   return res.json({ error: e });
  // }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////
};

exports.trackallproductsbyuser = async (req, res) => {
  const username12 = req.query.username1;
  console.log(username12);

  try {
    const isUser = await User.findOne({ username: username12 });
    // console.log(isUser);

    if (!isUser) {
      return res.status(401).json({ error: "No User Found" });
    }

    return res.status(200).json(isUser);

    // console.log(isUser);
  } catch (e) {
    return res.json({ error: e });
  }
};

exports.trackallproductsbyuseronlyproducts = async (req, res) => {
  const username12 = req.query.username1;
  console.log(username12);

  try {
    const isUser = await User.findOne({ username: username12 }).select(
      "trackedproducts"
    );
    // console.log(isUser);

    if (!isUser) {
      return res.status(401).json({ error: "No User Found" });
    }

    return res.status(200).json(isUser);

    // console.log(isUser);
  } catch (e) {
    return res.json({ error: e });
  }
};

exports.deletetrackedproduct = async (req, res) => {
  const { productid, username1 } = req.query;

  var prods = [];

  // console.log(username1);
  // console.log(productname1);

  User.findOne({ username: username1 }).then((data) => {
    if (data) {
      // console.log(data.trackedproducts);

      // console.log("ttttttttttttttttt");
      User.updateOne(
        { username: username1 },
        { $pull: { trackedproducts: { _id: productid } } }
      )
        .then((data) => {
          // console.log(data);
          return res.status(200).json({
            success: "Successfully Deleted from tracked Products",
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });
};

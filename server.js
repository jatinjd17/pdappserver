const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const allproductsroutes = require("./routes/allproductsroute");
const searchbarRoutes = require("./routes/searchbarroute");
const dealsRoutes = require("./routes/dealsroute");

const app = express();

app.use(bodyParser.json());

app.use(cors());
dotenv.config();
app.use("/api", allproductsroutes);
app.use("/api", searchbarRoutes);
app.use("/api", dealsRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    //   useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is connected");
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is Connected on port 8000 hehe");
    });
  })
  .catch((e) => {
    console.log(e);
  });

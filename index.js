const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const User = require("./model/user");

// Serve Static files
app.use(express.static("public"));

// Parsing body of request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const shopRoutes = require("./routes/shopRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");

// Add user in MW before adding accounts
app.use(async (req,res,next) => {
  const user = await User.findById("60f96cf838b62837dc8df9e4");
  req.user = user._id;
  next();
})

// Routes
app.use(shopRoutes);
app.use("/admin", adminRoutes);
app.use("/products", productRoutes);

// Setup templating engine
app.set("view engine", "ejs");

// 404
app.use("*", (req, res, next) => {
  res.end("Sorry not found the page you are looking for!");
});

mongoose
  .connect(
    "mongodb://localhost:2717/shop?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(async (conn) => {
    // console.log(conn);
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server listening in on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

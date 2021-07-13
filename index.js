const express = require("express");
const app = express();
const PORT = 3000;

// Serve Static files
app.use(express.static("public"));

const shopRoutes = require("./routes/shopRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");

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

app.listen(PORT, () => {
  console.log(`Server listening in on ${PORT}`);
});

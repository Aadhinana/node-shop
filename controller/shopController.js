exports.showMainPage = (req, res, next) => {
  return res.render("index");
};

exports.showCartPage = (req, res, next) => {
  return res.render("cart");
};

exports.showOrdersPage = (req, res, next) => {
  return res.render("orders");
};

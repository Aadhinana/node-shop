exports.showMainPage = (req, res, next) => {
  return res.render("index");
};

exports.showCartPage = (req, res, next) => {
  return res.end("Cart Page");
};

exports.showOrdersPage = (req, res, next) => {
  return res.end("The Orders page");
};

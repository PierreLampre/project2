var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/userinput", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/userInput.html"));
  });

  app.get("/myproperties", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/myproperties.html"));
  });

  app.get("/cc", isAuthenticated, function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/explanations/closingCosts.html")
    );
  });

  app.get("/ins", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/explanations/insurance.html"));
  });

  app.get("/pro-rent", isAuthenticated, function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/explanations/projectedRent.html")
    );
  });

  app.get("/pur-pri", isAuthenticated, function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/explanations/purchasePrice.html")
    );
  });

  app.get("/ren-cost", isAuthenticated, function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/explanations/renovationCosts.html")
    );
  });

  app.get("/util-mo", isAuthenticated, function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/explanations/utilitiesPerMonth.html")
    );
  });

  app.get("/vac-rate", isAuthenticated, function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/explanations/vacancyRate.html")
    );
  });

  app.get("/ymc", isAuthenticated, function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/explanations/yearlyMaintenanceCost.html")
    );
  });

  app.get("/yt", isAuthenticated, function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/explanations/yearlyTaxes.html")
    );
  });

  app.get("/yield", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/explanations/yield.html"));
  });
};

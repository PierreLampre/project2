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

  app.get("/faq", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/faq.html"));
  });

  app.get("/mtd", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/meetthedevs.html"));
  });
};

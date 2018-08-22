/*
 * GET home page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
  res.render("home", {
    data,
    title: "Design Frontiers",
    description: "Design sprints and lightning talks focusing on applying human-centered design to different fields and industries."
  });
};

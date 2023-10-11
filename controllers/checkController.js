const test_center = require("../model/test_location");

module.exports=async (req, resp) => {
    let user = await test_center.find({});
    // resp.send("working");
    resp.render("test_center_count", { title: user });
  }


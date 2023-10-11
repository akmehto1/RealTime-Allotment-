
const test_center = require("../model/test_location");
const student_data=require('../model/data');


module.exports.home=async (req, resp) => {
    let user = await test_center.find({});
    resp.render("view",{ title: user });
  }





  

  module.exports.show=async (req, resp) => {
    let user = await student_data.find({center: req.params.name });
    console.log(user);
    var value;
    console.log("view part is running");
     resp.render("view_students",{ title: user, value: req.params.name });
  }



const map = require("../model/map");
module.exports=async (req, resp) =>{
    let user = await map.find({});
     resp.render("map", { title: user });
  };


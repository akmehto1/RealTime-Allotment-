
const student_location=require('../model/place_location');
module.exports.home=(req, resp) => {
    resp.render("location");
  };



 
  
  const map=require('../model/map');
//handle post method andpout data
module.exports.add=(req, resp) => {
      console.log(req.body);
      student_location.create({
        name: req.body.name1,
        x: req.body.x,
        y: req.body.y,
      });
      map.create({
        name: req.body.name1,
        x: req.body.x,
        y: req.body.y,
      });
      console.log("new location add in database");
      resp.redirect("/home");
    }
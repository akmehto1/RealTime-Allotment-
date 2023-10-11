
const admin = require("../model/admin"); 
const test_center = require("../model/test_location");
const student_location=require('../model/place_location');
const map=require('../model/map');
const student_data=require('../model/data');
module.exports.home=async (req, resp) => {
     resp.render("Adminloginpage");
  }


  module.exports.login=async (req, resp) => {
    let user1 = await admin.find();
    // console.log(user1[0].password);
    // console.log(req.body.ids);
    if (( "Abhishek"== req.body.ids)) {
      if ( "12345"== req.body.pass) {
        let user2 = await test_center.find({});
        return resp.render("delete_center", { title: user2 });
      } else return resp.render("error");
    } else {
      resp.render("error");
    }
  }


//   app.post("/login", async (req, resp) => {
//     let user1 = await admin.find();
  
    
  
//     console.log(user1[0].password);
//     console.log(req.body.ids);
//     if ((user1[0].id = req.body.ids)) {
//       if (user1[0].password == req.body.pass) {
//         let user2 = await test_center.find({});
//         return resp.render("delete_center", { title: user2 });
//       } else return resp.render("error");
//     } else {
//       resp.render("error");
//     }
//   });

function distance(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;
  var c = Math.sqrt(a * a + b * b);
  return c;
}

async function Search(catagory, x1, y1) {
  //count no how many data in collection
  var query = test_center.find();
  let min_count;
  const number = await query.countDocuments();
  console.log(number);

  //get all data
  const user = await test_center.find({});
  let min_value = 100000;
  let min_name;
  for (var i = 0; i < number; i++) {
    let x2 = user[i].x;
    let y2 = user[i].y;
    let name = user[i].name;
    let curr_count = user[i].count;
    let max_count = user[i].max;
    let d1 = distance(x1, y1, x2, y2);
    console.log(d1);

    if (min_value > d1) {
      if (curr_count < max_count || catagory == 2) {
        min_value = d1;
        min_name = name;
        min_count = curr_count;
      }
    }
  }

  
  var myquery = { name: min_name };
  var newvalues = { $set: { count: min_count + 1 } };
  test_center.updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });

  return min_name;
}






module.exports.delete=async(req,resp)=>{
  let user = await student_data.find({ center: req.params.name });
  test_center.deleteOne({ name: req.params.name }, (err) => {
    if (err) console.log(err);
    else console.log("delete");
  });
  map.deleteOne({ name: req.params.name }, (err) => {
    if (err) console.log(err);
    else console.log("delete");
  });

  const number = user.length;

  for (var i = 0; i < number; i++) {
    var list = user[i];
    const data = await student_location.find({ name: list.location });
    var x = data[0].x;
    var y = data[0].y;
    console.log(x);
    value = await Search(req.body.option, x, y);
    console.log(value);
    student_data.updateOne(
      { center: req.params.name },
      { $set: { center: value } },
      function (err, result) {
        if (err) console.log(err);
        else console.log("update");
        //do something.
      }
    );
  }

  return resp.redirect("/home");
}




// // router.post('/login',admincontrollers.login)
// app.get("/delete_center", async (req, resp) => {
//   // admin.create({
//   //   password:"1234",
//   //   id:"admin"
//   // });

//   let user = await test_center.find({});
//   return resp.render("delete_center", { title: user });
// });

// app.get("/delete/:name", async (req, resp) => {
  
// });


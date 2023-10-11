const student_location = require("../model/place_location");
const student_data=require('../model/data');
const test_center=require('../model/test_location')

const  fast2sms=require('fast-two-sms');



module.exports.home=async (req, resp) => {
    const user = await student_location.find();
    var query = student_location.find();
    const number = await query.countDocuments();
    var data = [];
    for (var i = 0; i < number; i++) {
      data.push(user[i].name);
    }
    resp.render("index", { array_data: data, count: number });
  };


















  function distance(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;
    var c = Math.sqrt(a * a + b * b);
    return c;
  }
  
  //search function
  
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


  module.exports.add=async(req,resp)=>{
   
      let value;
    
      async function someFunction() {
        const user = await student_location.findOne({ name: req.body.myplace });
        //or find() for multiple result ,
        //iterate through them to get individual document
        let x1 = user.x;
        let y1 = user.y;
        let names = user.name;
    
        //  let l_name=console.log('name: ' + user.toObject().name);
        console.log("this is search", req.body.option);
        value = await Search(req.body.option, x1, y1);
        console.log(value);
    
        student_data.create({
          name: req.body.name1,
          condition: req.body.option,
          location: req.body.myplace,
          center: value,
          roll: req.body.roll,
          number: req.body.phone,
        });
        console.log(req.body.name);
        var options = {
          authorization:"C1URi5BzxlNO36k2cIwhrPtdjQ0VM9Ze8aYWqbfEoJSGvHFDT4moGEdc4v2wjRZki3bDpSCJTWyneLs1",
          message: `
          HELLO ${req.body.name1} THIS IS MSG FROM NTA ABOUT  YOUR MOCK CENTER \n
          NAME- ${req.body.name1} \n
          PHONE: ${req.body.phone} \n
          CENTER: ${value}
          URL:${'TEMP URL'}
          `,
          numbers: [req.body.phone],
        };
    
        fast2sms.sendMessage(options);
        console.log(req.body.roll);
        return resp.render("result", {
          title: value,
          name: req.body.name1,
          id: req.body.roll,
        });
      }
    
      console.log(req.body.roll);
      someFunction();

  }

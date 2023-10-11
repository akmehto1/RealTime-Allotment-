const mongoose=require('mongoose');

  const location=new mongoose.Schema({
    code:{
        type:Number,
    },
    name: {
      type: String,
    },
     x: {
      type: Number,
      
    },
    y: {
      type: Number,
    },
    count:{
    type:Number
    },
    max:{
      type:Number
    }
  });

const test_location=mongoose.model('test_center',location);

console.log("model is connected");

module.exports=test_location;

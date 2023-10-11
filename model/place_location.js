const mongoose=require('mongoose');

  const place_location=new mongoose.Schema({
    name: {
      type: String,
    },
     x: {
      type:Number,
      
    },
    y: {
      type: Number,
    },
    access: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Access"
    }
  });

const student_location=mongoose.model('student_place',place_location);

console.log("model is connected");

module.exports=student_location;

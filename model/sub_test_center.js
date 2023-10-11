const mongoose=require('mongoose');

  const test_center_details=new mongoose.Schema({
    name: {
      type: String,
    },
     address: {
      type:Number,
    },
    access:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Access"
    }
  });

const maps=mongoose.model('map',test_center_details);

console.log("now its connected");

module.exports=maps;

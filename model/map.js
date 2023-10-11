const mongoose=require('mongoose');

  const map=new mongoose.Schema({
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

const maps=mongoose.model('map',map);

console.log("maps is connect");

module.exports=maps;

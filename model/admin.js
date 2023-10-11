const mongoose=require('mongoose');

  const admins=new mongoose.Schema({
    id: {
      type: String,
    },
     password: {
      type:String,
    },
    access: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Access"
    }
  });

 

const admin=mongoose.model('admins',admins);

console.log("admin models is connect now");

module.exports=admin;

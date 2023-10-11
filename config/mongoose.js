const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection succesfull"))
  .catch((err) => console.log("err"));

const db= mongoose.connection;


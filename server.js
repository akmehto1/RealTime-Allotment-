const db = require("./config/mongoose");
const express = require('express');
const app=express();
const path = require("path");
const { render } = require("ejs");




app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//home routes
const home=require('./Routes/home');
app.use('/home',home);



//test center
const testcenter=require('./Routes/testcenter');
app.use('/testcenter',testcenter);



const showmap=require('./Routes/Showmap');
app.use('/showmap',showmap);




const Addlocation=require('./Routes/newaddlocation');
app.use('/addlocation',Addlocation);




const check=require('./Routes/check');
app.use('/check',check);







const viewstudentdata=require('./Routes/viewstudentdata');
app.use('/view_students_details',viewstudentdata);


const adminroutes=require('./Routes/adminpanel');
app.use('/admin',adminroutes)

app.listen(8000);

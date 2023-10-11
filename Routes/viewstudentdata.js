

const express=require('express');
const router = express.Router();

const studenttable=require('../controllers/viewstudentsdatacontroller');


router.get('/',studenttable.home);


router.get("/:name",studenttable.show);



console.log("students table working");


module.exports = router;







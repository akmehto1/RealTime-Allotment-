



const express=require('express');
const router = express.Router();
const AddnewlocationControllers=require('../controllers/AddnewlocationControllers');

router.get('/',AddnewlocationControllers.home);

router.post('/postlocation',AddnewlocationControllers.add)







module.exports = router;
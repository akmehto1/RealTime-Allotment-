const express=require('express');
const router = express.Router();
// const admincontroller=require('../controllers/adminController.js');

const admincontrollers=require('../controllers/adminController');
router.get('/',admincontrollers.home);

module.exports = router;




router.post('/login',admincontrollers.login)
router.get('/delete/:name',admincontrollers.delete)

// router.post('/login/delete')


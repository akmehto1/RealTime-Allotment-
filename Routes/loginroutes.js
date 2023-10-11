const express=require('express');
const router = express.Router();
const app=expresss();


const admincontrollers=require('../controllers/adminController');

router.post('/',admincontrollers.login)



// router.get('/delete',)

// app.use('/login/panel',)

module.exports = router;






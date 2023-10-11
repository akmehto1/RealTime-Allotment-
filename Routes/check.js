// center_count



const express=require('express');
const router = express.Router();
const checkControllers=require('../controllers/checkController');

router.get('/',checkControllers);

module.exports = router;
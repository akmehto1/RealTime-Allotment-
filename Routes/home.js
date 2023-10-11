const express=require('express');
const router = express.Router();
const HomeControllers=require('../controllers/HomeControllers');

router.get('/',HomeControllers.home);

router.post('/add',HomeControllers.add)

module.exports = router;
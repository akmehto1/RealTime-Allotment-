const express=require('express');
const router = express.Router();
const testcenter=require('../controllers/testcenter');

router.get('/',testcenter.home);


router.post('/adding',testcenter.add);

module.exports = router;




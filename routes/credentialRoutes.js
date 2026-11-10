const router=require('express').Router();
const controller=require('../controllers/credentialController');
router.get('/:applicationId',controller.list);
router.put('/:applicationId',controller.update);
module.exports=router;

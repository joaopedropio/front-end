const router = require('express').Router();
const { index, validateLogin } = require('../controllers/login');

router.get('/', index);
router.post('/validateLogin', validateLogin);

module.exports = router;
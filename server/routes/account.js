const router = require('express').Router();
const { index, register } = require('../controllers/account');

router.get('/register', index);
router.post('/register', register);

module.exports = router;
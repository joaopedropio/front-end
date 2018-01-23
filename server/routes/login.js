const router = require('express').Router();
const { index } = require('../controllers/login');

router.get('/', index);

module.exports = router;
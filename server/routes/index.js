const router = require('express').Router();

router.use('/', require('./login'));
router.use('/player', require('./player'));

module.exports = router;
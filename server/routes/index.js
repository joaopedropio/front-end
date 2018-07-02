const router = require('express').Router();

router.use('/', require('./login'));
router.use('/player', require('./player'));
router.use('/account', require('./account'));

module.exports = router;
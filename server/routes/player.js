const router = require('express').Router();
const { player } = require('../controllers/player');

router.get('/', player);

module.exports = router;
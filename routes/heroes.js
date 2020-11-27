const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController');

router.get('/', heroesController.showHeroes);
router.get('/detalle/:id', heroesController.detail);
router.get('/bio/:id/:ok?', heroesController.biography);

module.exports = router
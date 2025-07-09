const express = require('express');
const router = express.Router();
const { postVenta } = require('../controllers/ventas.controller');

router.post('/', postVenta);

module.exports = router;

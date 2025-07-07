const express = require('express');
const router = express.Router();
const { sugerenciasProductos } = require('../controllers/productos.controller');

// Ruta GET /api/productos

router.get('/buscar', sugerenciasProductos);

module.exports = router;

const express = require('express');
const router = express.Router();
const { obtenerProductos, obtenerProductoPorId} = require('../controllers/productos.controller');

// Ruta GET /api/productos
router.get('/', obtenerProductos);
router.get('/:id', obtenerProductoPorId);

module.exports = router;

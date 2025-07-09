const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

// Ruta GET /api/productos
router.get('/', productosController.obtenerProductos);
// router.get('/buscar', productosController.buscarProductos);
router.get('/:id', productosController.obtenerProductoPorId);

module.exports = router;

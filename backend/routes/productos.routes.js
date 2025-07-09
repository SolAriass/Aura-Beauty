const express = require('express');
const router = express.Router();
const { obtenerProductos, obtenerProductoPorId, obtenerCategorias} = require('../controllers/productos.controller');

// Ruta GET /api/productos
router.get('/categorias', obtenerCategorias);

router.get('/', obtenerProductos);
router.get('/:id', obtenerProductoPorId);

module.exports = router;

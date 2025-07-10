const express = require('express');
const router = express.Router();
const { postVenta, obtenerVentasPorUsuario } = require('../controllers/ventas.controller');

// POST para crear una venta
router.post('/', postVenta);

// GET para obtener las ventas de un usuario por su ID
router.get('/:usuarioId', obtenerVentasPorUsuario);

module.exports = router;

const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/users.controller');
const { obtenerProductos, crearProducto } = require('../controllers/productos.controller');

router.post('/productos', obtenerProductos);
router.post('/productos/crear', crearProducto);
router.post('/registro', registerUser);
router.post('/login', loginUser);
router.post('/home', loginUser);

module.exports = router;

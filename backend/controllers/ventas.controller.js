const { crearVenta, buscarVentasPorUsuario } = require('../services/ventas.service');

// POST /api/ventas
async function postVenta(req, res) {
  try {
    const { usuarioId, carrito } = req.body;
    console.log('REQ BODY:', req.body);

    const venta = await crearVenta(usuarioId, carrito);
    res.status(201).json(venta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// GET /api/ventas/:usuarioId
async function obtenerVentasPorUsuario(req, res) {
  const usuarioId = parseInt(req.params.usuarioId);

  if (!usuarioId) {
    return res.status(400).json({ message: 'ID de usuario inválido' });
  }

  try {
    const ventas = await buscarVentasPorUsuario(usuarioId);
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener ventas', error: error.message });
  }
}

module.exports = {
  postVenta,
  obtenerVentasPorUsuario
};

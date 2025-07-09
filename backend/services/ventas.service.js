const { crearVentaDB, buscarVentasPorUsuarioDB } = require('../repositories/ventas.repository');

// Servicio para crear una venta
async function crearVenta(usuarioId, carrito) {
  if (!usuarioId || !carrito || carrito.length === 0) {
    throw new Error('Faltan datos para registrar la venta.');
  }

  const venta = await crearVentaDB(usuarioId, carrito);
  return venta;
}

// Servicio para obtener las ventas de un usuario
async function buscarVentasPorUsuario(usuarioId) {
  return await buscarVentasPorUsuarioDB(usuarioId);
}

module.exports = {
  crearVenta,
  buscarVentasPorUsuario
};

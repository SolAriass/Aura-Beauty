const { crearVentaDB } = require('../repositories/ventas.repository');

async function crearVenta(usuarioId, carrito) {
  if (!usuarioId || !carrito || carrito.length === 0) {
    throw new Error('Faltan datos para registrar la venta.');
  }

  // Aquí podrías agregar más lógica: verificar stock, aplicar descuentos, etc.
  const venta = await crearVentaDB(usuarioId, carrito);
  return venta;
}

module.exports = { crearVenta };

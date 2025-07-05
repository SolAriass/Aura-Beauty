const productoRepo = require('../repositories/productos.repository');

async function listarProductos() {
  return await productoRepo.obtenerTodos();
}

module.exports = { listarProductos };

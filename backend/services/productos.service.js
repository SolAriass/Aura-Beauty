const productoRepo = require('../repositories/productos.repository');

async function listarProductos() {
  return await productoRepo.obtenerTodos();
}

async function registrarProducto(data) {
  return await productoRepo.crearProducto(data);
}

module.exports = { listarProductos, registrarProducto };

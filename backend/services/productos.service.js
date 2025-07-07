const productoRepo = require('../repositories/productos.repository');

async function listarProductos() {
  return await productoRepo.obtenerTodos();
}

async function buscarProductosPorNombre(nombre) {
  return await productoRepo.buscarProductosPorNombre(nombre);
}

module.exports = { listarProductos, buscarProductosPorNombre };

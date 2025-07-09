const productoRepo = require('../repositories/productos.repository');

async function listarProductos() {
  return await productoRepo.obtenerTodos();
}

async function buscarProductosPorNombre(nombre) {
  return await productoRepo.buscarPorNombre(nombre);
}

async function obtenerPorId(id) {
  return await productoRepo.obtenerPorId(id);
}


module.exports = { listarProductos, buscarProductosPorNombre, obtenerPorId };

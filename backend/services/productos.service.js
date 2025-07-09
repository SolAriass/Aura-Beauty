const productoRepo = require('../repositories/productos.repository');

async function listarProductos() {
  return await productoRepo.obtenerTodos();
}

const getSugerencias = async (query) => {
  if (!query || query.trim() === '') return [];
  return await productoRepo.getSugerencias(query);
};

async function obtenerPorId(id) {
  return await productoRepo.obtenerPorId(id);
}


module.exports = { listarProductos, buscarProductosPorNombre, obtenerPorId };

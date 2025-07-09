const productoRepo = require('../repositories/productos.repository');

async function listarProductos(filtros = {}) {
  return await productoRepo.obtenerTodos(filtros);
}

const getSugerencias = async (query) => {
  if (!query || query.trim() === '') return [];
  return await productoRepo.getSugerencias(query);
};

async function buscarProductosPorNombre(nombre) {
  return await productoRepo.buscarPorNombre(nombre);
}

async function obtenerPorId(id) {
  return await productoRepo.obtenerPorId(id);
}
async function listarCategorias() {
  return await productoRepo.obtenerCategoriasUnicas();
}
module.exports = {
  listarProductos,
  buscarProductosPorNombre,
  obtenerPorId,
  listarCategorias
};

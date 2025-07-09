const productoRepo = require('../repositories/productos.repository');

async function listarProductos() {
  return await productoRepo.obtenerTodos();
}

const getSugerencias = async (query) => {
  if (!query || query.trim() === '') return [];
  return await productoRepo.getSugerencias(query);
};

module.exports = { listarProductos, getSugerencias };

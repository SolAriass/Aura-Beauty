const productoRepo = require('../repositories/productos.repository');

async function buscarProductosPorNombre(nombre) {
  return await productoRepo.buscarPorNombre(nombre);
}

module.exports = { buscarPorNombre };

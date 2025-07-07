const { PrismaClient } = require('../generated/prisma');
const homeService = require('../services/productos.service');
const prisma = new PrismaClient();

const buscarProductos = async (req, res) => {
  const query = req.query.q;

  if (!query || query.trim().length < 2) {
    return res.json([]);
  }

  try {
    const resultados = await productoService.buscarProductosPorNombre(query);
    res.json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al buscar productos' });
  }
};

module.exports = { buscarProductos };

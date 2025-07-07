const { PrismaClient } = require('../generated/prisma');
const productoService = require('../services/productos.service');

const prisma = new PrismaClient();

async function sugerenciasProductos(req, res) {
  const { q } = req.query;
  if (!q || q.trim() === '') return res.json([]); // sin resultados si está vacío

  try {
    const productos = await productoService.buscarProductosPorNombre(q.trim());
    res.json(productos);
  } catch (error) {
    console.error('Error en sugerencias:', error);
    res.status(500).json({ message: 'Error buscando productos' });
  }
}

module.exports = { sugerenciasProductos };

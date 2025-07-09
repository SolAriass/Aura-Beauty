const { PrismaClient } = require('../generated/prisma');
const productoService = require('../services/productos.service');

const prisma = new PrismaClient();

const obtenerProductos = async (req, res) => {
  try {
    const productos = await productoService.listarProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};


module.exports = { obtenerProductos };

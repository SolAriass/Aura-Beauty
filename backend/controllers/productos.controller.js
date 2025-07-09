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

const obtenerProductoPorId = async (req, res) => {
   const id = parseInt(req.params.id);
const producto = await productoService.obtenerPorId(id);

  if (!producto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  res.json(producto);
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId
};

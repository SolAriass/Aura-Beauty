const { PrismaClient } = require('../generated/prisma');
const productoService = require('../services/productos.service');

const prisma = new PrismaClient();

const obtenerProductos = async (req, res) => {
  try {
    const productos = await productoService.listarProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
};

const crearProducto = async (req, res) => {
  try {
    const nuevo = await productoService.registrarProducto(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto' });
  }
};

module.exports = { obtenerProductos, crearProducto };

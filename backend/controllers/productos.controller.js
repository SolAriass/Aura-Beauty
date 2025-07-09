const { PrismaClient } = require('../generated/prisma');
const productoService = require('../services/productos.service');

const prisma = new PrismaClient();

async function obtenerProductos(req, res) {
  try {
    const { nombre, precio, categoria } = req.query;

    const filtros = {
      nombre,
      precio,
      categoria
    };

    const productos = await productoService.listarProductos(filtros);
    res.json(productos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
}

async function obtenerCategorias(req, res) {
  try {
    const categorias = await productoService.listarCategorias();
    res.json(categorias);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
}

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
  obtenerProductoPorId,
  obtenerCategorias
};

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function obtenerTodos() {
  return prisma.producto.findMany();
}

async function crearProducto(data) {
  return prisma.producto.create({ data });
}

module.exports = { obtenerTodos, crearProducto };

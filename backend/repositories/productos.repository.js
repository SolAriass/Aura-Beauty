const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function obtenerTodos() {
  return prisma.product.findMany();
}

async function buscarPorNombre(nombre) {
  return prisma.producto.findMany({
    where: {
      nombre: {
        contains: nombre,
        mode: 'insensitive'
      }
    },
    take: 5,
    select: {
      id: true,
      nombre: true,
      url: true
    }
  });
}

module.exports = { obtenerTodos, buscarPorNombre };

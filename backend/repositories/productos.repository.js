const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function obtenerTodos() {
  return prisma.product.findMany();
}

async function buscarPorNombre(nombre) {
  return prisma.product.findMany({
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

async function obtenerPorId(id) {
  return prisma.product.findUnique({
    where: { id: parseInt(id) },
    include: {
      genero: true
    }
  });
}

module.exports = { obtenerTodos, buscarPorNombre, obtenerPorId };

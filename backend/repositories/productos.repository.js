const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function buscarProductosPorNombre(nombre) {
  return await prisma.product.findMany({
    where: {
      name: {
        contains: nombre,
        mode: 'insensitive', // no distingue mayúsculas
      },
    },
    take: 5,
    select: {
      id: true,
      name: true,
      url: true, // imagen
    },
  });
}

module.exports = {
  buscarProductosPorNombre,
};

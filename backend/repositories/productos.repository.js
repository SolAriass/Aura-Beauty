const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function obtenerTodos() {
  return prisma.product.findMany();
}

module.exports = { obtenerTodos };

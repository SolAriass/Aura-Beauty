const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function obtenerTodos(filtros = {}) {
  const { nombre, precio, categoria } = filtros;

  return prisma.product.findMany({
    where: {
      AND: [
        nombre
          ? {
              nombre: {
                contains: nombre,
                mode: 'insensitive'
              }
            }
          : {},
        categoria
          ? {
              idCategoria: parseInt(categoria)
            }
          : {}
      ]
    },
    orderBy: precio
      ? {
          precio: precio === 'asc' ? 'asc' : 'desc'
        }
      : undefined,
    include: {
      categoria: true
    }
  });
}

async function obtenerCategoriasUnicas() {
  return prisma.categoria.findMany({
    select: {
      id: true,
      nombre: true
    },
    orderBy: {
      nombre: 'asc'
    }
  });
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
      genero: true,
      categoria: true
    }
  });
}

module.exports = {
  obtenerTodos,
  buscarPorNombre,
  obtenerPorId,
  obtenerCategoriasUnicas
};

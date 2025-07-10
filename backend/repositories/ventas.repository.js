const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Guardar una nueva venta en la base de datos
async function crearVentaDB(usuarioId, carrito) {
  const total = carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);

  return await prisma.venta.create({
    data: {
      usuarioId,
      total,
      detalles: {
        create: carrito.map(item => ({
          productoId: item.producto.id,
          cantidad: item.cantidad,
          subtotal: item.producto.precio * item.cantidad
        }))
      }
    },
    include: {
      detalles: {
        include: {
          producto: true // opcional si querés detalles del producto al crear
        }
      }
    }
  });
}

// Buscar ventas por usuario
async function buscarVentasPorUsuarioDB(usuarioId) {
  return await prisma.venta.findMany({
    where: { usuarioId },
    include: {
      detalles: {
        include: {
          producto: true
        }
      }
    },
    orderBy: { fecha: 'desc' }
  });
}

module.exports = {
  crearVentaDB,
  buscarVentasPorUsuarioDB
};

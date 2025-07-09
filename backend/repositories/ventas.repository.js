const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function crearVentaDB(usuarioId, carrito) {
  // ✅ Calculamos el total
  const total = carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);

  return await prisma.venta.create({
    data: {
      usuarioId,
      total, // ✅ lo mandamos
      detalles: {
        create: carrito.map(item => ({
          productoId: item.producto.id,
          cantidad: item.cantidad,
          subtotal: item.producto.precio * item.cantidad // 👈 este campo también debe existir
        }))
      }
    },
    include: {
      detalles: true
    }
  });
}

module.exports = { crearVentaDB };

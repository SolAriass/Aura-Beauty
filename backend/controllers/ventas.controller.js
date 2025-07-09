const { crearVenta } = require('../services/ventas.service');

async function postVenta(req, res) {
  try {
    const { usuarioId, carrito } = req.body;
       console.log('REQ BODY:', req.body);

    const venta = await crearVenta(usuarioId, carrito);
    res.status(201).json(venta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { postVenta };

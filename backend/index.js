const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/users.routes');
const productosRoutes = require('./routes/productos.routes');
const ventasRoutes = require('./routes/ventas.routes')

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes)

app.get('/', (req, res) => {
  res.send('¡Backend funcionando desde Angular!');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

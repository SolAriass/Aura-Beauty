const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/users.routes');


app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

// Usar imagenes
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('¡Backend funcionando desde Angular!');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

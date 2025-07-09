const userService = require('../services/users.service');

const registerUser = async (req, res) => {
  const { email, nombre, contrasenia, apellido, direccion } = req.body;

  try {
    const user = await userService.register({ email, nombre, contrasenia, apellido, direccion });
    res.status(201).json({ message: 'Usuario creado', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, contrasenia } = req.body;

  try {
    const user = await userService.login(email, contrasenia);
    res.status(200).json({ message: 'Login exitoso', user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getPerfil = async (req, res) => {
  try {
    const usuario = await userService.getById(req.usuario.id);
    res.json(usuario);
  } catch (err) {
    res.status(404).json({ mensaje: err.message });
  }
};

module.exports = { registerUser, loginUser, getPerfil };

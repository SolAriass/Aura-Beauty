const userRepo = require('../repositories/users.repository');

const register = async (userData) => {
  const existing = await userRepo.findByEmail(userData.email);
  if (existing) throw new Error('Email ya registrado');
  const user = await userRepo.createUser(userData);
  return user;
};

const login = async (email, contrasenia) => {
  const user = await userRepo.findByEmail(email);
  if (!user || user.contrasenia !== contrasenia) {
    throw new Error('Credenciales inválidas');
  }
  return user;
};

const getById = async (id) => {
  const user = await userRepo.findById(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user;
};

module.exports = { register, login, getById };

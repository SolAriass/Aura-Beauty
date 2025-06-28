const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

const registerUser = async (req, res) => {
  const { email, nombre, contrasenia, apellido, direccion } = req.body;

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: 'Email ya registrado' });
    }

    const user = await prisma.user.create({
      data: { email, nombre, contrasenia, apellido, direccion }
    });

    res.status(201).json({ message: 'Usuario creado', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario', error });
  }
};

const loginUser = async (req, res) => {
  const { email, contrasenia } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.contrasenia !== contrasenia) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    res.status(200).json({ message: 'Login exitoso', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};


module.exports = { registerUser, loginUser };

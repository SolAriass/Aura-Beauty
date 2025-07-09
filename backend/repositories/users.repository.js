const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const findByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

const createUser = async (data) => {
  return prisma.user.create({ data });
};

const findById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      email: true,
      direccion: true
    }
  });
};

module.exports = { findByEmail, createUser, findById };

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const findByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

const createUser = async (data) => {
  return prisma.user.create({ data });
};

const findById = async (id) => {
  return await prisma.user.findUnique({
    where: { id: Number(id) },
  });
};

module.exports = { createUser, findByEmail, findById };


/*
  Warnings:

  - Added the required column `apellido` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "apellido" TEXT NOT NULL,
ADD COLUMN     "direccion" TEXT NOT NULL;

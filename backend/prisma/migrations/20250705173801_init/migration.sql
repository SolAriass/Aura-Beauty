/*
  Warnings:

  - You are about to drop the column `clasificacion` on the `Product` table. All the data in the column will be lost.
  - Added the required column `idCategoria` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idGenero` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "clasificacion",
ADD COLUMN     "idCategoria" INTEGER NOT NULL,
ADD COLUMN     "idGenero" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genero_nombre_key" ON "Genero"("nombre");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_idGenero_fkey" FOREIGN KEY ("idGenero") REFERENCES "Genero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

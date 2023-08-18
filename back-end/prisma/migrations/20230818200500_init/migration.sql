-- CreateTable
CREATE TABLE "TipoVeiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Vaga" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ocupada" BOOLEAN NOT NULL DEFAULT false,
    "tipoVeiculoId" INTEGER NOT NULL,
    CONSTRAINT "Vaga_tipoVeiculoId_fkey" FOREIGN KEY ("tipoVeiculoId") REFERENCES "TipoVeiculo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

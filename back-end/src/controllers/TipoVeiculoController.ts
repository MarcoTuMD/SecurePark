import { PrismaClient } from "@prisma/client";

export class TipoVeiculoContoller {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    public async listarTodos() {
        return await this.prisma.tipoVeiculo.findMany()
    }

    public async criar(nome: string) {
        return await this.prisma.tipoVeiculo.create({
            data: {
                nome: nome,
            },
        });
    }

    public async editar(id: number, nome: string) {
        return await this.prisma.tipoVeiculo.update({
            where: {
                id: id,
            },
            data: {
                nome: nome,
            },
        })
    }

    public async excluir(id: number) {
        return await this.prisma.tipoVeiculo.delete({
            where: {
                id: id,
            },
        })
    }


}
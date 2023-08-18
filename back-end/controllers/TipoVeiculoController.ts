import { PrismaClient } from "@prisma/client";

export class TipoVeiculoContoller {
    private static instance: TipoVeiculoContoller;
    private prisma: PrismaClient = new PrismaClient();

    private constructor() { }

    public static getInstance(): TipoVeiculoContoller {
        if (!TipoVeiculoContoller.instance) {
            TipoVeiculoContoller.instance = new TipoVeiculoContoller();
        }
        return TipoVeiculoContoller.instance;
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
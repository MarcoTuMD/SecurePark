import { PrismaClient } from "@prisma/client";
import { Observer } from "./Observer/Observer";

export class VagaContoller {
    private static instance: VagaContoller;
    private prisma: PrismaClient = new PrismaClient();
    private observers: Observer[] = []; // Lista de observadores

    private constructor() { }

    public static getInstance(): VagaContoller {
        if (!VagaContoller.instance) {
            VagaContoller.instance = new VagaContoller();
        }
        return VagaContoller.instance;
    }

    public async listarTodas() {
        return await this.prisma.vaga.findMany();
    }

    public async criar(tipoVeiculoId: number) {
        return await this.prisma.vaga.create({
            data: {
                tipoVeiculoId: tipoVeiculoId
            },
        });
    }

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    private notifyObservers(): void {


        this.observers.forEach(observer => {
            observer.update();
        });
    }

    public async ocupar(id: number, tipoVeiculoId: number) {
        this.notifyObservers();
        return await this.prisma.vaga.update({
            where: {
                id: id,
            },
            data: {
                ocupada: true,
                tipoVeiculoId: tipoVeiculoId
            },
        })
    }

    public async desocupar(id: number, tipoVeiculoId: number) {
        this.notifyObservers();
        return await this.prisma.vaga.update({
            where: {
                id: id,
            },
            data: {
                ocupada: false,
                tipoVeiculoId: tipoVeiculoId
            },
        })
    }


    public async excluir(id: number) {
        return await this.prisma.vaga.delete({
            where: {
                id: id,
            },
        })
    }
}
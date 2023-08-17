module.exports = () => {


    const { PrismaClient } = require("@prisma/client");
    const prisma = new PrismaClient();

    const controller = {};

    controller.listarTodas = async (req, res) => {
        res.status(200).json(await prisma.vaga.findMany())
    };

    controller.criar = async (req, res) => {
        res.status(200).json(await prisma.vaga.create({
            data: {
                tipoVeiculoId: req.body.tipoVeiculo,
            },
        }));
    }

    controller.ocupar = async (req, res) => {
        res.status(200).json(await prisma.vaga.update({
            where: {
                id: req.body.id,
            },
            data: {
                acupada: true,
                tipoVeiculo: req.body.tipoVeiculo
            },
        }));
    }

    controller.desocupar = async (req, res) => {
        res.status(200).json(await prisma.vaga.update({
            where: {
                id: req.body.id,
            },
            data: {
                acupada: false,
                tipoVeiculo: req.body.tipoVeiculo
            },
        }));
    }

    controller.excluir = async (req, res) => {
        res.status(200).json(await prisma.vaga.delete({
            where: {
                id: req.body.id,
            },
        }));
    }


    return controller;
}
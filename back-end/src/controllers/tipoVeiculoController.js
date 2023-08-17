module.exports = () => {


    const { PrismaClient } = require("@prisma/client");
    const prisma = new PrismaClient();

    const controller = {};

    controller.listarTodos = async (req, res) => {
        res.status(200).json(await prisma.tipoVeiculo.findMany())
    };

    controller.criar = async (req, res) => {
        res.status(200).json(await prisma.tipoVeiculo.create({
            data: {
                nome: req.body.nome,
            },
        }));

    }

    controller.editar = async (req, res) => {
        res.status(200).json(await prisma.tipoVeiculo.update({
            where: {
                id: req.body.id,
            },
            data: {
                nome: req.body.nome,
            },
        }));
    }

    controller.excluir = async (req, res) => {
        res.status(200).json(await prisma.tipoVeiculo.delete({
            where: {
                id: req.body.id,
            },
        }));
    }

    return controller;
}
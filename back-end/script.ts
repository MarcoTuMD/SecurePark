import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const tipoVeiculo = await prisma.tipoVeiculo.create({
        data: {
            nome: 'Carro',
        },
    })
    console.log(tipoVeiculo)

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
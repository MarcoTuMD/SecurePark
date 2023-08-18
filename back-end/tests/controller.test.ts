
import { app } from "../server";
import request from "supertest";

let idTipoVeiculo: number;

describe("Testando requisicoes para tipo de veiculo", () => {

    it("recuperar todos os tipos ", async () => {
        const result = await request(app).get("/tipoVeiculo");
        expect(result.statusCode).toEqual(200);
    });

    it("criar tipo de veiculo", async () => {
        const result = (await request(app).post("/tipoVeiculo").send({ nome: 'nomeTeste' }));
        idTipoVeiculo = result.body.id
        expect(result.statusCode).toEqual(200);
    });

    it("editar tipo de veiculo", async () => {
        const result = (await request(app).put("/tipoVeiculo").send({ id: idTipoVeiculo, nome: 'nomeTeste' }));
        expect(result.statusCode).toEqual(200);
    });

    it("excluir tipo de veiculo", async () => {
        const result = (await request(app).delete("/tipoVeiculo").send({ id: idTipoVeiculo }));
        expect(result.statusCode).toEqual(200);
    });

});

let idVaga: number;

describe("Testando requisicoes para vaga", () => {
    it("recuperar todas as vagas", async () => {
        const result = await request(app).get("/vaga");
        expect(result.statusCode).toEqual(200);
    });

    it("criar vaga", async () => {
        const resultTipoVeiculo = (await request(app).post("/tipoVeiculo").send({ nome: 'nomeTeste' }));
        idTipoVeiculo = resultTipoVeiculo.body.id

        const result = await request(app).post("/vaga").send({ tipoVeiculoId: idTipoVeiculo });
        idVaga = result.body.id
        await request(app).delete("/tipoVeiculo").send({ id: idTipoVeiculo });
        expect(result.statusCode).toEqual(200);

    });

    it("ocupar vaga", async () => {
        const result = await request(app).put("/ocuparVaga").send({ id: idVaga, tipoVeiculoId: idTipoVeiculo });
        expect(result.statusCode).toEqual(200);
    });

    it("desocupar vaga", async () => {
        const result = await request(app).put("/ocuparVaga").send({ id: idVaga, tipoVeiculoId: idTipoVeiculo });
        expect(result.statusCode).toEqual(200);
    });

    it("excluir vaga", async () => {
        const result = await request(app).delete("/vaga").send({ id: idVaga });
        expect(result.statusCode).toEqual(200);
    });
});
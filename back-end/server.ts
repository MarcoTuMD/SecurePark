import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { TipoVeiculoContoller } from './controllers/TipoVeiculoController';
import bodyParser from 'body-parser';
import { VagaContoller } from './controllers/VagaController';
import { VagaObserver } from './controllers/Observer/VagaObserver';

dotenv.config();

export const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

const controllerTipoVeiculo: TipoVeiculoContoller = TipoVeiculoContoller.getInstance();
const controllerVaga: VagaContoller = VagaContoller.getInstance();
const observer = new VagaObserver();
controllerVaga.addObserver(observer);


//rotas para o tipo de veiculo

app.get('/tipoVeiculo', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await controllerTipoVeiculo.listarTodos());
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/tipoVeiculo', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await controllerTipoVeiculo.criar(req.body.nome));

    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/tipoVeiculo', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await controllerTipoVeiculo.editar(req.body.id, req.body.nome));
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/tipoVeiculo', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await controllerTipoVeiculo.excluir(req.body.id));
    } catch (error) {
        res.status(500).send(error);
    }
});


//rotas para a vaga

app.get('/vaga', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await controllerVaga.listarTodas());
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/vaga', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await controllerVaga.criar(req.body.tipoVeiculoId));
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/ocuparVaga', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await controllerVaga.ocupar(req.body.id, req.body.tipoVeiculoId));
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/desocuparVaga', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await controllerVaga.desocupar(req.body.id, req.body.tipoVeiculoId));
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/vaga', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await controllerVaga.excluir(req.body.id));
    } catch (error) {
        res.status(500).send(error);
    }
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
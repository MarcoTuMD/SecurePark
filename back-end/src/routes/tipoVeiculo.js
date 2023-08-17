module.exports = app => {
    const controller = require('../controllers/tipoVeiculoController')();

    app.route('/api/tipoVeiculo').get(controller.listarTodos);
    app.route('/api/tipoVeiculo').post(controller.criar);
    app.route('/api/tipoVeiculo').put(controller.editar);
    app.route('/api/tipoVeiculo').delete(controller.excluir);
}
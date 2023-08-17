module.exports = app => {
    const controller = require('../controllers/vagaController')();

    app.route('/api/vaga').get(controller.listarTodas);
    app.route('/api/vaga').post(controller.criar);
    app.route('/api/ocuparVaga').put(controller.ocupar);
    app.route('/api/desocuparVaga').put(controller.desocupar);
    app.route('/api/vaga').delete(controller.excluir);

}
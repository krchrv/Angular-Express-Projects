const CakeController = require('../controllers/cake.controller')

console.log('CakeController: ', CakeController);

module.exports = function Route(app, server){

    const mongoose = require('mongoose');

    mongoose.set('useUnifiedTopology', true);

    app.get('/', (req, res) => {
        CakeController.new(req, res);
    });

    app.post('/quotes', (req, res) => {
        CakeController.create(req, res);
    });

    app.get('/quotes', (req, res) => {
        CakeController.index(req, res);
    });

};
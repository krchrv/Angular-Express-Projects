const CakeController = require('../controllers/cake.controller')

module.exports = function Route(app, server){

    const mongoose = require('mongoose');

    mongoose.set('useUnifiedTopology', true);

    app.get('/cakes', (req, res) => {
        CakeController.index(req, res);
    });

    app.get('/cakes/:id', (req, res) => {
        CakeController.show(req, res);
    });

    app.post('/cakes', (req, res) => {
        CakeController.create(req, res);
    });

    app.post('/rate/:id', (req, res) => {
        CakeController.postRate(req, res);
    });
};
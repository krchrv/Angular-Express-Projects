const TaskController = require('../controllers/task.controller')

module.exports = function Route(app, server){

    const mongoose = require('mongoose');

    mongoose.set('useUnifiedTopology', true);

    app.get('/tasks', (req, res) => {
        TaskController.index(req, res);
    });

    app.get('/tasks/:id', (req, res) => {
        TaskController.show(req, res);
    });

    app.post('/tasks', (req, res) => {
        TaskController.create(req, res);
    });

    app.put('/tasks/:id', (req, res) => {
        TaskController.update(req, res);
    })

    app.delete('/tasks/:id', (req, res) => {
        TaskController.destroy(req, res);
    })

};
const Task = require('mongoose').model('Task');

module.exports = {
// Get all resources
    index(req, res) { 
        Task.find()
        .then(allTasks => {
            res.json(allTasks);
        })
        .catch(err => {
            res.json(err);
        })
    },
// Get one resource
    show(req, res) { 
        Task.findById(req.params.id)
        .then(foundTask => {
            console.log("Found: ", foundTask);
            res.json(foundTask);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
// Display form for creating resource
    new(req, res) { 
    },
// Create one resource
    create(req, res) { 
        Task.create(req.body)
        .then(newTask => {
            console.log("Created task: ", newTask);
            res.json(newTask);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
// Display form for editing resource
    // edit(req, res) { },
// Send updated resource for saving in database
    update(req, res) { 
        Task.findByIdAndUpdate(req.params.id, req.body)
        .then(foundTask => res.json(foundTask))
        .catch(err => res.json(err));
    },
// Remove resource from database
    destroy(req, res) { 
        Task.findByIdAndRemove(req.params.id, req.body)
        .then(task => {
            res.json(task);
        })
        .catch(err => {
            res.json(err);
        })
    },
}
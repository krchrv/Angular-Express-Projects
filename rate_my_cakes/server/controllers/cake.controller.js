const Cake = require('mongoose').model('Cake');

module.exports = {
// Get all resources
    index(req, res) { 
        Cake.find()
        .then(allCakes => {
            res.json(allCakes);
        })
        .catch(err => {
            res.json(err);
        })
    },
// Get one resource
    show(req, res) { 
        Cake.find({_id: req.params.id})
        .then(foundCake => {
            res.json(foundCake);
        })
        .catch(err => {
            res.json(err);
        })
    },
// Display form for creating resource
    new(req, res) { 
    },
// Create one resource
    create(req, res) { 
        Cake.create(req.body)
        .then(newCake => {
            console.log("Created Cake: ", newCake);
            res.json(newCake);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
// Display form for editing resource
    // edit(req, res) { },
// Send updated resource for saving in database
    // update(req, res) { },
// Remove resource from database
    // destroy(req, res) { },
}
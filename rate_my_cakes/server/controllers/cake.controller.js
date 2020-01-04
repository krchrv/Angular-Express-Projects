const Cake = require('mongoose').model('Cake');
const Rate = require('mongoose').model('Rate');

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
        console.log("REQ BODY ****", req.body);
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
    
    postRate(req, res) {
        console.log("INSIDE postRate Controller***", req.body);
        Rate.create(req.body, (err, newRate) => {
            if(err) {
                console.log(err);
                res.json(err);
            } else {
                Cake.findByIdAndUpdate({ _id: req.params.id }, { $push: { rating: newRate }}, (err) => {
                    if(err) {
                        console.log(err);
                        res.json(err);
                    } else {
                        console.log("**Rating Update Success**");
                    }
                })
            }
        })
    }
// Display form for editing resource
    // edit(req, res) { },
// Send updated resource for saving in database
    // update(req, res) { },
// Remove resource from database
    // destroy(req, res) { },
}
const db = require("../models");
const Boat = db.boat;

// Create and Save a new Boat
exports.create = (req, res) => {
// Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Boat
    const boat = {
        boat_name: req.body.boat_name,
        boat_image: req.body.boat_image,
        boat_description: req.body.boat_description,
        boat_created_at: Date.now(),
        boat_updated_at: Date.now()
    };

    // Save Boat in the database
    Boat.create(boat)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Boat."
            });
        });
};

// Retrieve all Boats from the database.
exports.findAll = (req, res) => {
    Boat.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving boats."
            });
        });

};

// Find a single Boat with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Boat.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Boat with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Boat with id=" + id
            });
        });

};

// Update a Boat by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Boat.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Boat was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Boat with id=${id}. Maybe Boat was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Boat with id=" + id
            });
        })

};

// Delete a Boat with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Boat.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Boat was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Boat with id=${id}. Maybe Boat was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Boat with id=" + id
            });
        });

};
const db = require("../models");
const Trip = db.trips;
const Op = db.Sequelize.Op;

// Create and Save a new Trip
exports.create = (req, res) => {
// Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Trip
    const trip = {
        trip_by_user: req.trip_by_user,
        trip_title: req.trip_by_user,
        trip_start_time: req.trip_by_user,
        trip_start_location: req.trip_start_location,
        trip_end_time: req.trip_end_time,
        trip_end_location: req.trip_end_location
    };

    // Save Trip in the database
    Trip.create(trip)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Trip."
            });
        });
};

// Retrieve all Trips from the database.
exports.findAll = (req, res) => {
    Trip.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving trips."
            });
        });

};

// Find a single Trip with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Trip.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Trip with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Trip with id=" + id
            });
        });

};

// Update a Trip by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Trip.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Trip was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Trip with id=${id}. Maybe Trip was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Trip with id=" + id
            });
        })

};

// Delete a Trip with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Trip.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Trip was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Trip with id=${id}. Maybe Trip was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Trip with id=" + id
            });
        });

};
const db = require("../models");
const { Trip } = require('../models');
const { Boat } = require('../models');

// Create and Save a new Trip
exports.create = (req, res) => {
// Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Trip
    const trip = {
        trip_by_user: req.body.trip_by_user,
        trip_title: req.body.trip_title,
        trip_start_time: req.body.trip_start_time,
        trip_start_location: req.body.trip_start_location,
        trip_with_boat: req.body.trip_with_boat,
        // Last two elements need to be inserted when the trip has been finished
        // trip_end_time: req.trip_end_time,
        // trip_end_location: req.trip_end_location
    };

    // Save Trip in the database
    Trip.create(trip)
        .then((data) => {
            Boat.update({boat_active_user: req.body.trip_by_user}, {
                where: { id: req.body.trip_with_boat }
            }).then((data2) => {
                const finalResult = Object.assign(data, data2);
                res.send(finalResult);
            }).catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the Trip."
                });
            })
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

// Get made trips by a user
exports.getUserTrips = (req, res) => {
    const user_id = req.params.id;

    Trip.findAll({
        where: {
            trip_by_user: user_id,
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(401).send({
            message: err.message || "User not found"
        })
    })
};

// Update a Trip by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Trip.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                Boat.update({boat_active_user: null}, {
                    where: { id: req.body.trip_with_boat }
                }).then((data2) => {
                    res.send(data2);
                }).catch(error => {
                    res.status(500).send({
                        message:
                            error.message || "Some error occurred while updating the Trip."
                    });
                })
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

exports.download = (req, res) => {
    const id = req.params.id

    const file = './uploads/'+ "trip_" + id + '.csv';
    res.download(file, (err) => {
        if (err) res.status(500).send({
            message:err
        })
    });
}

exports.upload = (req, res) => {
    const id = req.params.id

    try {
        if(!req.files) {
            res.status(500).send({
                message: "No file send"
            })
        } else {
            let trip_file = req.files.trip_file;

            //Use the mv() method to place the file in upload directory
            trip_file.mv('./uploads/'+ "trip_" + id + '.csv');

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: "trip_" + id,
                    size: trip_file.size
                }
            });
        }
    } catch (err) {
        res.status(500).send({
            message:err
        });
    }

};

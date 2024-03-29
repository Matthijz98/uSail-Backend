const trips = require("../controllers/trip.controller");
module.exports = app => {
    const trips = require("../controllers/trip.controller");

    var router = require("express").Router();

    // Create a new Trip
    router.post("/", trips.create);

    // Retrieve all Trips
    router.get("/", trips.findAll);

    // Retrieve a single Trip with id
    router.get("/:id", trips.findOne);

    // Retrieve a single trip from a user
    router.get("/user/:id", trips.getUserTrips);

    // Update a Trip with id
    router.put("/:id", trips.update);

    // Delete a Trip with id
    router.delete("/:id", trips.delete);

    // Trip file upload route
    router.post("/:id/upload", trips.upload)

    // Trip file download route
    router.get("/:id/download", trips.download)

    app.use('/api/trips', router);
};

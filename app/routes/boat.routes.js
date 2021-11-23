module.exports = app => {
    const boats = require("../controllers/boat.controler");

    var router = require("express").Router();

    // Create a new Boat
    router.post("/", boats.create);

    // Retrieve all Boats
    router.get("/", boats.findAll);


    // Retrieve a single Boat with id
    router.get("/:id", boats.findOne);

    // Update a Boat with id
    router.put("/:id", boats.update);

    // Delete a Boat with id
    router.delete("/:id", boats.delete);

    app.use('/api/boats', router);
};
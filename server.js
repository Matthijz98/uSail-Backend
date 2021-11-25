const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const db = require("./app/models");
db.sequelize.sync(force=true);

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the uSail backend" });
});

require("./app/routes/boat.routes")(app)
require("./app/routes/user.routes")(app);
require("./app/routes/trip.routes")(app);

// set port, listen for requests
const PORT = process.env.port || 3000;
if (!process.env.node_test) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
}

module.exports = app;
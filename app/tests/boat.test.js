// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../../server");
const db = require("../models/index");

describe("boat POST route", () => {
    let thisDb = db;

    beforeAll(async () =>{
        await thisDb.sequelize.sync({ force: true });
    })
    test("It should create the boat and return it", async () => {
        const response = await request(app).post("/api/boats").send({
            "boat_name": "test_boat_name",
            "boat_image": "boat_image.jpg",
            "boat_description": "This is the boat description",
        });
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("boat_name", "test_boat_name");
        expect(response.body).toHaveProperty("boat_image", "boat_image.jpg");
        expect(response.body).toHaveProperty("boat_description", "This is the boat description");
        expect(response.body).toHaveProperty("updatedAt");
        expect(response.body).toHaveProperty("createdAt");

        expect(response.statusCode).toBe(200);
    });

    test("It should return error if boat_name is not provided", async () => {
        const response = await request(app).post("/api/boats").send({
            "boat_image": "boat_image.jpg",
            "boat_description": "This is the boat description",
        });
        expect(response.body).toHaveProperty("message");

        expect(response.statusCode).toBe(500);
    });
});

describe("boat GET route", () => {
    let thisDb = db;
    let boat_id = '';

    beforeAll(async () =>{
        await thisDb.sequelize.sync({ force: true });

        const response = await request(app).post("/api/boats").send({
            "boat_name": "Test boat name",
            "boat_image": "boat_image.jpg",
            "boat_description": "This is the boat description",
        });
        boat_id = response.body.id;
    })

    test("Get boat by id", async () => {
        const response = await request(app).get("/api/boats/" + boat_id);
        expect(response.body).toHaveProperty("id", boat_id);

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("boat_name", "Test boat name")
    });

    test("Boat should not be resurned if id is not given", async () => {
        const response = await request(app).get("/api/boats/" + 'not-a-boat-id');
        expect(response.body).toHaveProperty("message");

        expect(response.statusCode).toBe(500);
    });
});
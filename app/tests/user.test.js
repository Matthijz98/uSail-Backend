// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../../server");

describe("POST new user", () => {
    test("It should create the user and return it", async () => {
        const response = await request(app).post("/api/users").send({
            "user_profile_image": "test_user_profile_image",
            "user_name": "test_user_name",
            "user_password": "test_user_password",
            "user_email": "test@test.com",
            "user_full_name" : "Firstname Lastname",

        });
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("user_name", "test_user_name");
        expect(response.body).toHaveProperty("user_password", "test_user_password");
        expect(response.body).toHaveProperty("user_email", "test@test.com");
        expect(response.body).toHaveProperty("user_full_name", "Firstname Lastname");
        expect(response.body).toHaveProperty("user_profile_image", null);
        expect(response.body).toHaveProperty("updatedAt");
        expect(response.body).toHaveProperty("createdAt");

        expect(response.statusCode).toBe(200);
    });
});
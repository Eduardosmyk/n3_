const request = require("supertest");
const app = require("../index");

test("GET / deve retornar 200", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(200);
});

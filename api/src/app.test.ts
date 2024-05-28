import request from "supertest";
import { app } from "./app";

test("testing", (done) => {
  request(app).get("/").expect(200, done)
});

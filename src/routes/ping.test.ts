import request from "supertest";
import express from "express";
import router from "../router";

const app = express();
app.use("/", router);

describe("Routes", function () {
  beforeAll(() => {
    jest.mock("../database", () => jest.fn());
  });

  test("responds to /ping", async () => {
    const res = await request(app).get("/ping");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("hello world!");
  });
});

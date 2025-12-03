import request from "supertest";
import app from "../index.proxy.mjs";

describe("/health", () => {
  test("responds with 200 and JSON status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/);
    expect(res.body).toEqual({ status: "ok" });
  });
});

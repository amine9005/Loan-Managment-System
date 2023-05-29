import supertest from "supertest";
import app from "../app.js";

describe("The index endpoint", () => {
  describe("happy cases: Given '/' in input", () => {
    // test("should run ",()=>{
    //     expect(true).toBe(true);
    // })

    it("should return 200", async () => {
      const response = await supertest(app).get("/");
      expect(response.statusCode).toBe(400);
      expect(response.type).toBe("application/json");
      expect(response.body.message).toBe("api: /api/v1/loan_manager");
      expect(response.body.data).toBeUndefined();
    });
  });

  // it("should return 200", async () => {
  //         const response = await supertest(app).get("/");
  //         expect(response.status).toBe(200);
  //     });
});

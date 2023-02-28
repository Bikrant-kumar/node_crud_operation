const request = require('supertest');
const app = require("../../index");

// const controller = require("../controller/controller");

// describe("group", () => {
//     test("add ", () => {
//     expect(1+2).toBe(3);
//     });

// });

test("create user ", async () => {
    const name = "XYZ";
    const email = "XYZ@gamil.com";
      const res = await request(app).post("api/users").send({
        name:"XYZ",
        email:"XYZ@gamil.com",
        gender:"abc",
        status:"active"
      });
      console.log(res);
      expect(res.body.name == name);
      expect(res.body.email == email);
});

test("get users ", async () => {
  const res = await request(app).get("api/users").send([{
    id:1,
    name: "XYZ",
    email: "XYZ@gamil.com",
    gender: "abc",
    status: "active",
  }]);
  expect(res.body && typeof res.body === "array");
  expect(res.body.name == "XYZ");
});

test("get user by id ", async () => {
  const res = await request(app).get("api/users/1").send({
    id: 1,
    name: "XYZ",
    email: "XYZ@gamil.com",
    gender: "abc",
    status: "active",
  });
  expect(res.body && typeof res.body === "object");
  expect((res.body.id == 1));
});


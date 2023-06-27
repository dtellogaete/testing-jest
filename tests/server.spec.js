const request = require("supertest");
const server = require("../index");

describe("Endpoint de Cafes", () => {

    it("Status 200", async () => {
        const response = await request(server).get("/cafes").send();
        const status = response.statusCode
        expect(status).toEqual(200);
    });

    it("Tipo de dato", async () => {
        const response = await request(server).get("/cafes").send();
        const type = typeof(response.body);
        expect(type).toEqual("object");
    });

});

describe("Status 404 al eliminar café que no existe", () => {    
    it("Status 404", async () => {
        const response = await request(server).delete("/cafes/20").send();
        const status = response.statusCode
        expect(status).toEqual(404);
    });
});

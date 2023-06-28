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
    it("Código 404", async () => {
        const response = await request(server)
            .delete("/cafes/20")
            .set("Authorization", "token"); 

        expect(response.status).toBe(404);
    });
});

describe("Agrega un nuevo café", () => {
    it("201 al agregar un nuevo café", async () => {
        const response = await request(server)
            .post("/cafes")
            .send({
                id: 10,
                nombre: "Café de Olla",                
            });

        expect(response.status).toBe(201);
    });
});

describe("Actualiza un café con id diferente", () => {
    it("400 el id es diferente", async () => {
        const response = await request(server)
            .put("/cafes/20")
            .send({
                id: 10,
                nombre: "Café de Olla",                
            });
        expect(response.status).toBe(400);
    });
});

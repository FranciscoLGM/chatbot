import mongoose from "mongoose";
import request from "supertest";
import express from "express";
import router from "../../routes/chatRoutes.js";

const app = express();
app.use(express.json());
app.use("/api", router);

describe("Order Routes", () => {
  beforeAll(async () => {
    // Conectar a una base de datos de prueba
    await mongoose.connect(process.env.MONGO_URL);
  });
  afterAll(async () => {
    // Cerrar la conexión a la base de datos de prueba
    await mongoose.connection.close();
  });
  test("Debe almacenar una orden a través de la API", async () => {
    const orderData = {
      items: [{ name: "Sushi", quantity: 2, price: 10 }],
      total: 20,
      customerName: "Pepe Grillo",
      customerContact: "1234567890",
      customerAddress: "Calle Sushi 123",
    };

    const response = await request(app).post("/api/order").send(orderData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty(
      "answer",
      "Pedido almacenado satisfactoriamente!"
    );
  });

  test("Debe retornar un error si faltan detalles del pedido", async () => {
    const orderData = {
      items: [{ name: "Sushi", quantity: 2, price: 10 }],
      total: 20,
      customerName: "",
      customerContact: "1234567890",
      customerAddress: "Calle Sushi 123",
    };

    const response = await request(app).post("/api/order").send(orderData);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "answer",
      "Faltan detalles del pedido."
    );
  });
});

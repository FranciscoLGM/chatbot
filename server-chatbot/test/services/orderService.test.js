import mongoose from "mongoose";
import Order from "../../models/Order.js";
import { validateOrder, storeOrder } from "../../services/orderService.js";

describe("Order Service", () => {
  beforeAll(async () => {
    // Conectar a una base de datos de prueba
    await mongoose.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    // Cerrar la conexión a la base de datos de prueba
    await mongoose.connection.close();
  });

  afterEach(async () => {
    // Limpiar la colección de órdenes después de cada test
    await Order.deleteMany({});
  });

  describe("storeOrder", () => {
    test("Debe almacenar una orden correctamente", async () => {
      const orderData = {
        items: [{ name: "Sushi", quantity: 2, price: 10 }],
        total: 20,
        customerName: "Pepe Grillo",
        customerContact: "1234567890",
        customerAddress: "Calle Sushi 123",
      };

      const order = await storeOrder(orderData);

      expect(order).toHaveProperty("_id");
      expect(order.items[0].name).toBe("Sushi");
      expect(order.total).toBe(20);
      expect(order.customerName).toBe("Pepe Grillo");
      expect(order.customerContact).toBe("1234567890");
      expect(order.customerAddress).toBe("Calle Sushi 123");
    });
  });

  describe("validateOrder", () => {
    test("Debe lanzar un error si faltan detalles del pedido", () => {
      const orderData = {
        items: [{ name: "Sushi", quantity: 2, price: 10 }],
        total: 20,
        customerName: "Pepe Grillo",
        customerContact: "",
        customerAddress: "Calle Sushi 123",
      };

      expect(() => validateOrder(orderData)).toThrow(
        "Faltan detalles del pedido."
      );
    });

    test("Debe validar correctamente una orden válida", () => {
      const orderData = {
        items: [{ name: "Sushi", quantity: 2, price: 10 }],
        total: 20,
        customerName: "Pepe Grillo",
        customerContact: "1234567890",
        customerAddress: "Calle Sushi 123",
      };

      expect(() => validateOrder(orderData)).not.toThrow();
    });
  });
});

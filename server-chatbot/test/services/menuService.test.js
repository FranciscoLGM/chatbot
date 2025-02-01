import mongoose from "mongoose";
import Menu from "../../models/Menu.js";
import fetchMenu from "../../services/menuService.js";

describe("Menu Service", () => {
  beforeAll(async () => {
    // Conectar a una base de datos de prueba
    await mongoose.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    // Cerrar la conexión a la base de datos
    await mongoose.connection.close();
  });

  afterEach(async () => {
    // Limpiar la colección de menú después de cada test
    await Menu.deleteMany({});
  });

  test("Debe recuperar el menú correctamente", async () => {
    const menuItems = [
      { name: "Sushi", description: "Delicioso sushi", price: 10 },
      { name: "Ramen", description: "Caldo de ramen", price: 8 },
    ];

    await Menu.insertMany(menuItems);

    const fetchedMenu = await fetchMenu();
    expect(fetchedMenu.length).toBe(2);
    expect(fetchedMenu[0].name).toBe("Sushi");
    expect(fetchedMenu[1].name).toBe("Ramen");
    expect(fetchedMenu[0].description).toBe("Delicioso sushi");
    expect(fetchedMenu[1].description).toBe("Caldo de ramen");
    expect(fetchedMenu[0].price).toBe(10);
    expect(fetchedMenu[1].price).toBe(8);
  });
});

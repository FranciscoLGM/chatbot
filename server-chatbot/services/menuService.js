import Menu from "../models/Menu.js";

// Función para obtener el menú de la base de datos
const fetchMenu = async () => {
  try {
    const menuItems = await Menu.find({});
    return menuItems;
  } catch (error) {
    console.error("Error al obtener el menú:", error);
    throw new Error("No se pudo obtener el menú.");
  }
};

export default fetchMenu;

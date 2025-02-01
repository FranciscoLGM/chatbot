import fetchMenu from "../services/menuService.js";

const getMenu = async (req, res, next) => {
  try {
    const menuItems = await fetchMenu();
    res.json({ menuItems });
  } catch (error) {
    console.error("Error al obtener el menú:", error);
    next(error); // Pasar el error al middleware de manejo de errores
  }
};

export default getMenu;

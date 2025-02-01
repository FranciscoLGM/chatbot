import { Router } from "express";
import proccessMessage from "../controllers/chatController.js";
import getMenu from "../controllers/menuController.js";
import storeOrderController from "../controllers/orderController.js";
import errorMiddleware from "../middlewares/errorMiddleware.js";
import validateMessage from "../middlewares/validateMessage.js";

const router = Router();
const MENU_KEYWORDS = ["menú", "menu"];

// Ruta para procesar el mensaje del chat
router.post("/chat", validateMessage, async (req, res, next) => {
  try {
    const { normalizedMessage } = req.body;

    // Verifica si el mensaje contiene palabras clave relacionadas con el menú
    const isMenuQuery = MENU_KEYWORDS.some((keyword) =>
      normalizedMessage.includes(keyword)
    );

    if (isMenuQuery) {
      // Obtiene el menú de la DB si la pregunta contiene palabras clave relacionadas con el menú
      return getMenu(req, res, next);
    } else {
      // Procesa el mensaje normalmente si no es una pregunta sobre el menú
      return proccessMessage(req, res, next);
    }
  } catch (error) {
    next(error); // Pasar el error al middleware de manejo de errores
  }
});

// Ruta para almacenar el pedido
router.post("/order", storeOrderController);

// Ruta para obtener el menú
router.get("/menu", getMenu);

// Usar middleware de manejo de errores
router.use(errorMiddleware);

export default router;

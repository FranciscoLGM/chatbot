import { validateOrder, storeOrder } from "../services/orderService.js";

const storeOrderController = async (req, res, next) => {
  try {
    // Validar el pedido
    validateOrder(req.body);

    // Almacenar el pedido
    await storeOrder(req.body);
    res.status(201).json({ answer: "Pedido almacenado satisfactoriamente!" });
  } catch (error) {
    console.error("Error al procesar el pedido:", error);
    if (
      error.message === "Faltan detalles del pedido." ||
      error.message === "Detalles del artículo del pedido no válidos."
    ) {
      res.status(400).json({ answer: error.message });
    } else {
      next(error); // Pasar el error al middleware de manejo de errores
    }
  }
};

export default storeOrderController;

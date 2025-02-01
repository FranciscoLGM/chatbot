import getResponse from "../services/nlpService.js";

const proccessMessage = async (req, res, next) => {
  try {
    // Validación de entrada
    const { message } = req.body;
    if (!message || typeof message !== "string") {
      return res
        .status(400)
        .json({ error: "El mensaje es requerido y debe ser un texto." });
    }

    // Obtener la respuesta del chatbot
    const response = await getResponse(message);

    // Enviar la respuesta al cliente
    res.json(response);
  } catch (error) {
    console.error("Error al procesar el mensaje:", error);
    next(error); // Pasar el error al middleware de manejo de errores
  }
};

export default proccessMessage;

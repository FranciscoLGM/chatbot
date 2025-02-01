import { manager } from "../nlp/nlpConfig.js";

// Función para obtener la respuesta del chatbot
const getResponse = async (message) => {
  try {
    const response = await manager.process("es", message);

    return response.answer
      ? { answer: response.answer }
      : {
          answer:
            "¡Ups! No entendí tu mensaje. Estoy aquí para ayudarte, así que no dudes en intentar de nuevo o hacerme otra pregunta.",
        };
  } catch (error) {
    console.error("Error al procesar el mensaje:", error);
    return {
      answer:
        "Lo siento, ocurrió un error al procesar tu mensaje. Por favor, intenta nuevamente más tarde.",
    };
  }
};

export default getResponse;

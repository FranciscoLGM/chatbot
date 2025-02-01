import { manager, trainChatbot } from "../../nlp/nlpConfig.js";
import answers from "../../data/answers.js";

beforeAll(async () => {
  await trainChatbot();
});

describe("Chatbot Service", () => {
  test("Debe responder correctamente a la intención de saludo", async () => {
    const response = await manager.process("es", "Hola");
    expect(response.intent).toBe("saludo");

    const possibleAnswers = answers
      .filter((answer) => answer.intent === "saludo")
      .map((answer) => answer.response);
    expect(possibleAnswers).toContain(response.answer);
  });

  test("Debe responder correctamente a la intención de pedido", async () => {
    const response = await manager.process("es", "Quiero hacer un pedido");
    expect(response.intent).toBe("tomar_pedido");

    const possibleAnswers = answers
      .filter((answer) => answer.intent === "tomar_pedido")
      .map((answer) => answer.response);
    expect(possibleAnswers).toContain(response.answer);
  });

  test("Debe responder correctamente a la intención de mostrar menú", async () => {
    const response = await manager.process("es", "Mostrar menú");
    expect(response.intent).toBe("mostrar_menu");

    const possibleAnswers = answers
      .filter((answer) => answer.intent === "mostrar_menu")
      .map((answer) => answer.response);
    expect(possibleAnswers).toContain(response.answer);
  });

  test("Debe responder correctamente a la intención de preguntar horarios", async () => {
    const response = await manager.process("es", "¿Cuáles son sus horarios?");
    expect(response.intent).toBe("preguntar_horarios");

    const possibleAnswers = answers
      .filter((answer) => answer.intent === "preguntar_horarios")
      .map((answer) => answer.response);
    expect(possibleAnswers).toContain(response.answer);
  });

  test("Debe responder correctamente a la intención de preguntar horarios", async () => {
    const response = await manager.process("es", "¿Están abiertos?");
    expect(response.intent).toBe("preguntar_horarios");

    const possibleAnswers = answers
      .filter((answer) => answer.intent === "preguntar_horarios")
      .map((answer) => answer.response);
    expect(possibleAnswers).toContain(response.answer);
  });

  test("Debe responder correctamente a la intención de preguntar ubicación", async () => {
    const response = await manager.process("es", "¿Dónde están ubicados?");
    expect(response.intent).toBe("preguntar_ubicacion");

    const possibleAnswers = answers
      .filter((answer) => answer.intent === "preguntar_ubicacion")
      .map((answer) => answer.response);
    expect(possibleAnswers).toContain(response.answer);
  });

  test("Debe responder correctamente a la intención de agradecimiento", async () => {
    const response = await manager.process("es", "Gracias");
    expect(response.intent).toBe("agradecimiento");

    const possibleAnswers = answers
      .filter((answer) => answer.intent === "agradecimiento")
      .map((answer) => answer.response);
    expect(possibleAnswers).toContain(response.answer);
  });

  test("Debe responder correctamente a la intención de despedida", async () => {
    const response = await manager.process("es", "Adiós");
    expect(response.intent).toBe("despedida");

    const possibleAnswers = answers
      .filter((answer) => answer.intent === "despedida")
      .map((answer) => answer.response);
    expect(possibleAnswers).toContain(response.answer);
  });
});

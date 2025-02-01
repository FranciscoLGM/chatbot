import { NlpManager } from "node-nlp";
import utterances from "../data/utterances.js";
import answers from "../data/answers.js";

const manager = new NlpManager({ languages: ["es"] });

// Función para validar datos de entrada
const validateData = (data, dataType) => {
  if (!Array.isArray(data)) {
    throw new Error(`${dataType} debe ser un arreglo.`);
  }
  return data;
};

// Función para añadir documentos (intenciones) al manager
const addDocuments = (documents) => {
  documents.forEach((utterance) => {
    if (utterance.text && utterance.intent) {
      manager.addDocument("es", utterance.text, utterance.intent);
    } else {
      console.warn("Utterance inválido:", utterance);
    }
  });
};

// Función para añadir respuestas al manager
const addAnswers = (responses) => {
  responses.forEach((answer) => {
    if (answer.intent && answer.response) {
      manager.addAnswer("es", answer.intent, answer.response);
    } else {
      console.warn("Respuesta inválida:", answer);
    }
  });
};

// Función para entrenar el modelo del chatbot
const trainChatbot = async () => {
  try {
    // Validar datos de entrada
    validateData(utterances, "Utterances");
    validateData(answers, "Answers");

    // Añadir documentos y respuestas al manager
    addDocuments(utterances);
    addAnswers(answers);

    // Entrenar el modelo
    await manager.train();
    console.log("🤖 Modelo entrenado satisfactoriamente!");

    // Guardar el modelo
    await manager.save();
  } catch (error) {
    console.error("Error al entrenar el modelo:", error.message);
  }
};

export { manager, trainChatbot };

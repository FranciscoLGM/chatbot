import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { trainChatbot } from "./nlp/nlpConfig.js";
import chatRoutes from "./routes/chatRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

// Verificar que todas las variables de entorno necesarias estén definidas
const requiredEnvVars = ["PORT", "MONGO_URI"];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(
      `Error: ${varName} no está definido en las variables de entorno.`
    );
    process.exit(1);
  }
});

// Puerto
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rutas
app.use("/api", chatRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

// Conexión a la base de datos
connectDB()
  .then(() => {
    // Entrena el modelo
    return trainChatbot();
  })
  .then(() => {
    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al iniciar la aplicación:", error);
    process.exit(1);
  });

import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI no está definido en las variables de entorno.");
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Base de datos conectada satisfactoriamente!");
  } catch (error) {
    console.error("Error en la conexión a la base de datos:", error);
    process.exit(1);
  }
};

export default connectDB;

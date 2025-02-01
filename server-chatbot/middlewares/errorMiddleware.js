// Middleware de manejo de errores
const errorMiddleware = (err, req, res, next) => {
  console.error("Error:", err);

  res.status(err.status || 500).json({
    message: err.message || "Error interno del servidor",
    error: process.env.NODE_ENV === "development" ? err : {}, // Mostrar más información en desarrollo
  });
};

export default errorMiddleware;

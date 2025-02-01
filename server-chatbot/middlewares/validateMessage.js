// Middleware para normalizar y validar el mensaje
const validateMessage = (req, res, next) => {
  const { message } = req.body;
  if (!message || typeof message !== "string") {
    return res
      .status(400)
      .json({ error: "El mensaje es requerido y debe ser un texto." });
  }
  req.body.normalizedMessage = message.toLowerCase();
  next();
};

export default validateMessage;

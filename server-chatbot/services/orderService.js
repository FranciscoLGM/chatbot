import Order from "../models/Order.js";

// Validar los detalles de un pedido
const validateOrder = (order) => {
  const { items, total, customerName, customerContact, customerAddress } =
    order;

  // Validar que todos los campos necesarios estén presentes
  if (
    !items ||
    !total ||
    !customerName ||
    !customerContact ||
    !customerAddress
  ) {
    throw new Error("Faltan detalles del pedido.");
  }

  // Validar que items no esté vacío y tenga las propiedades necesarias
  if (
    !Array.isArray(items) ||
    items.length === 0 ||
    !items.every((item) => item.name && item.quantity && item.price)
  ) {
    throw new Error("Detalles del artículo del pedido no válidos.");
  }
};

// Almacenar un pedido en la base de datos
const storeOrder = async (orderData) => {
  const { items, total, customerName, customerContact, customerAddress } =
    orderData;

  // Crear un nuevo pedido
  const order = new Order({
    items,
    total,
    customerName,
    customerContact,
    customerAddress,
  });

  // Guardar el pedido en la base de datos
  await order.save();

  return order;
};

export { validateOrder, storeOrder };

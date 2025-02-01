import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
    min: 0,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerContact: {
    type: String,
    required: true,
    match: [
      /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/,
      "Formato de número de teléfono inválido",
    ],
  },
  customerAddress: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;

import mongoose from "mongoose";
import product from "./productModel";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    oderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          default: 0,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
  },
  { timestamps: true },
);

const order = mongoose.model("Order", orderSchema);

export default order;

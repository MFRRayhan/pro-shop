import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Pro-Shop server is running...");
});

app.get("/api/products", async (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", async (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on ${port}`));

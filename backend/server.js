import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleWare/errorMiddleware.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Pro-Shop server is running...");
});

// PRODUCTS
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port}`));

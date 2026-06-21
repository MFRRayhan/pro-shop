/* ==============================
CORE IMPORTS
============================== */
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

/* ==============================
APP INIT
============================== */
const app = express();
const port = process.env.PORT || 4000;

/* ==============================
GLOBAL MIDDLEWARE
============================== */
app.use(cors());
app.use(express.json());

/* ==============================
FIREBASE CONFIG
============================== */
// const serviceAccount = require('./serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

/* ==============================
CUSTOM MIDDLEWARE
============================== */

/* ==============================
DATABASE CONFIG
============================== */
const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

/* ==============================
ROUTES + DB CONNECTION
============================== */
async function run() {
  try {
    await client.connect();

    const db = client.db("myDB");

    /* ==============================
    COLLECTIONS
    ============================== */

    /* ==============================
    ROOT
    ============================== */
    app.get("/", (req, res) => {
      res.json({ status: "Ok", message: "Pro-shop Server is running" });
    });

    /* ==============================
    404 HANDLER
    ============================== */
    app.use((req, res) => {
      res.status(404).json({ status: 404, message: "API not found" });
    });

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error(err);
  }
}

run();

/* ==============================
SERVER START
============================== */
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

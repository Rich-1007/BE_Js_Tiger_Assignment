import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";
const app = express();

app.use(cors());

app.use(express.json());

app.get("/shipments", async (req, res) => {
  try {
    const client = await connectDB();
    const db = client.db("shipment_db");
    const coll = db.collection("shipments");
    const data = await coll.find({}).toArray();
    res.json({
      data,
    });
  } catch (error) {
    console.log("failed to fetch data", error);
  }
});

app.get("/documents", async (req, res) => {
  try {
    const client = await connectDB();
    const db = client.db("shipment_db");
    const coll = db.collection("documents");
    const data = await coll.find({}).toArray();
    res.json({
      data,
    });
  } catch (error) {
    console.log("failed to fetch data", error);
  }
});

app.get("/locations", async (req, res) => {
  try {
    const client = await connectDB();
    const db = client.db("shipment_db");
    const coll = db.collection("locations");
    const data = await coll.find({}).toArray();
    res.json({
      data,
    });
  } catch (error) {
    console.log("failed to fetch data", error);
  }
});

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("DB Done...");
    });
  })
  .catch((err) => {
    console.error("Mongo db connection failed!!! ", err);
  });

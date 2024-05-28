import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(json());

app.get("/", (req, res) => {
  res.json({ test: "test response" });
});

export { app };

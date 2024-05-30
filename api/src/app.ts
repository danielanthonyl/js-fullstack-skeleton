import express, { json } from "express";
import cors from "cors";
import { openingModelRouter } from "./OpeningModel/infrastructure/openingModelRouter";

const app = express();

app.use(cors({ origin: process.env.UI_ROUTE }));
app.use(json());

app.use(openingModelRouter);

export { app };

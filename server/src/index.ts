import express from "express";
import bodyParser from "body-parser";
import {config} from "./config/index.js";
import webhookRoutes from "./routes/webhook.js";
import hobbiesRoutes from './routes/hobby.js';
import cors from "cors";
const app = express();
app.use(cors());

app.use("/api/webhook", bodyParser.raw({ type: "application/json" }));
app.use("/api/webhook", webhookRoutes);
app.use("/api/hobbies", hobbiesRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

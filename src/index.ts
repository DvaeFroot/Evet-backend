import "./lib/db";
import express from "express";
import timerRoutes from "./routes/timer";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.use("/timers", timerRoutes);

app.listen(port, () => {
  console.log(`Evet DB listening at http://localhost:${port}`);
});

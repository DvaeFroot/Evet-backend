import { Router } from "express";
import { TimerModel, ITimer } from "../models/timer";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const countries: ITimer[] = await TimerModel.find().exec();
    return res.json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const timer: ITimer = req.body;

    const timerExists = await TimerModel.findOne({
      name: timer.name,
    }).exec();

    if (timerExists) {
      return res
        .status(409)
        .json({ error: "There is already another timer with this name" });
    }

    const newTimer = await TimerModel.create(timer);
    return res.status(201).json(newTimer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;

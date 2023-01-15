import { model, Schema, Document } from "mongoose";

interface ITimer extends Document {
  name: string;
  iso2code: string;
}

const TimerSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  endTime: {
    type: String,
  },
});

const TimerModel = model<ITimer>("Timer", TimerSchema);

export { TimerModel, ITimer };

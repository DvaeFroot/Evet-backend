import { model, Schema, Document } from "mongoose";

interface ITimer extends Document {
  name: string;
  channel: string;
  endTime: string;
}

const TimerSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    channel: {
      type: String,
      unique: true,
    },
    endTime: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const TimerModel = model<ITimer>("Timer", TimerSchema);

export { TimerModel, ITimer };

import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    employee: {
      type: {
        _id: {
          type: mongoose.Schema.ObjectId,
          ref: "Employee",
        },
        name: String,
        email: String,
        employee_id: String,
      },
      required: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    entry: {
      type: Date,
      required: true,
      trim: true,
    },
    departure: {
      type: Date,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Record", recordSchema);

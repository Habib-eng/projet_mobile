import mongoose from "mongoose";
import mongooseId from "mongoose-id";

const Patient = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Femelle", "Male"],
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      min: 20000000,
      max: 99999999,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

Patient.plugin(mongooseId);

export default mongoose.model("Patient", Patient);

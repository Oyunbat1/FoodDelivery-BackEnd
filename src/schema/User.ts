import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("user", UserSchema);

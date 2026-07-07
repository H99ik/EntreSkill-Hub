import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    resetOtp: {
      type: String,
    },

    resetOtpExpires: {
      type: Date,
    },

    isResetOtpVerified: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["entrepreneur", "mentor", "admin"],
      default: "entrepreneur",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;

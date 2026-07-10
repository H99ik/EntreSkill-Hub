import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["Course", "Video", "PDF"],
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "General",
    },

    link: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Resource", resourceSchema);

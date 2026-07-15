import mongoose from "mongoose";

const roadmapStepSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false },
);

const roadmapSchema = new mongoose.Schema(
  {
    entrepreneur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      required: true,
    },

    steps: [roadmapStepSchema],

    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Roadmap", roadmapSchema);

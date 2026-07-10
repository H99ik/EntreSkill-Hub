import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    expertise: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 5,
    },

    sessions: {
      type: Number,
      default: 0,
    },

    bio: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    linkedin: {
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

export default mongoose.model("Mentor", mentorSchema);

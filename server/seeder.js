import mongoose from "mongoose";
import dotenv from "dotenv";

import resources from "./data/resources.js";
import businessIdeas from "./data/businessIdeas.js";
import mentors from "./data/mentors.js";

import Resource from "./models/Resource.js";
import BusinessIdea from "./models/BusinessIdea.js";
import Mentor from "./models/Mentor.js";

dotenv.config();

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // Clear old data
    await Resource.deleteMany();
    await BusinessIdea.deleteMany();
    await Mentor.deleteMany();

    console.log("🗑️ Old database records removed");

    // Insert fresh data
    await Resource.insertMany(resources);
    await BusinessIdea.insertMany(businessIdeas);
    await Mentor.insertMany(mentors);

    console.log("🎉 Database Seeded Successfully!");
    console.log(`📚 Resources: ${resources.length}`);
    console.log(`💡 Business Ideas: ${businessIdeas.length}`);
    console.log(`👨‍🏫 Mentors: ${mentors.length}`);

    process.exit();
  } catch (error) {
    console.error("❌ Seeder Error:", error.message);
    process.exit(1);
  }
};

importData();
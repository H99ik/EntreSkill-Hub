import mongoose from "mongoose";
import dotenv from "dotenv";

import resources from "./data/resources.js";
import Resource from "./models/Resource.js";

dotenv.config();

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // Delete old resources
    await Resource.deleteMany();

    console.log("🗑️ Old resources removed");

    // Insert new resources
    await Resource.insertMany(resources);

    console.log("🎉 50 Resources Imported Successfully!");

    process.exit();
  } catch (error) {
    console.error("❌ Seeder Error:", error.message);

    process.exit(1);
  }
};

importData();
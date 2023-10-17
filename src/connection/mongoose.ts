import mongoose from "mongoose";
import { SESSION } from "../config";

export async function connectMongoose() {
  try {
    await mongoose
      .connect(SESSION.mongooseURL)
      .then(() => console.log("✅ Database connected."));
  } catch (error) {
    console.error(error);
  }
}

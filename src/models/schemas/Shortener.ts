import Mongoose from "mongoose";
import type { IShortener } from "../../@types/index.js";

const ShorterSchema = new Mongoose.Schema<IShortener>({
  urlID: String,
  originalURL: String,
  clicks: Number,
  date: String,
  aliases: String,
});

export default Mongoose.model("Shortener-Schemas", ShorterSchema);

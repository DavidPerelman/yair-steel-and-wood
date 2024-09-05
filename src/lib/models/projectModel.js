import mongoose from "mongoose";
import { Division } from "./divisionModel";
import { Material } from "./materialModel";

const imageSchema = new mongoose.Schema({
  secure_url: String,
  public_id: String,
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [imageSchema], required: true },
  thumbnail: { type: imageSchema, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  length: { type: Number, required: true },
  division: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Division", required: true },
  ],
  material: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Material", required: true },
  ],
});

export const Project =
  mongoose.models?.Project || mongoose.model("Project", projectSchema);

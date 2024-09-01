import mongoose from "mongoose";
import { Division } from "./divisionModel";
import { Material } from "./materialModel";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String },
    images: { type: [String], required: true },
    thumbnail: { type: String },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    size: {
      height: { type: Number },
      width: { type: Number },
      length: { type: Number },
    },
    division: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Division", required: true },
    ],
    material: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Material", required: true },
    ],
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

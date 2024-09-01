import mongoose from "mongoose";
import { Project } from "./projectModel";

const divisionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },
  { timestamps: true }
);

export const Division =
  mongoose.models.Division || mongoose.model("Division", divisionSchema);

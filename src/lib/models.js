import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, max: 50 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String },
    images: { type: [String], required: true },
    thumbnail: { type: String },
    slug: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    size: { type: String, required: true },
    division: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Division",
      required: true,
    },
    material_type: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Material",
      required: true,
    },
  },
  { timestamps: true }
);

const divisionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    projects: { type: [mongoose.Schema.Types.ObjectId], ref: "Project" },
  },
  { timestamps: true }
);

const materialSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    projects: { type: [mongoose.Schema.Types.ObjectId], ref: "Project" },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export const Division =
  mongoose.models.Division || mongoose.model("Division", divisionSchema);
export const Material =
  mongoose.models.Material || mongoose.model("Material", materialSchema);

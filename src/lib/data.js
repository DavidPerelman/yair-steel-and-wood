import { connectToDb } from "./connectToDb";
import { Project, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";

// // TEMPORARY DATA
// const users = [
//   { id: 1, username: "John" },
//   { id: 2, username: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: ".....", userId: 1 },
//   { id: 2, title: "Post 2", body: ".....", userId: 1 },
//   { id: 3, title: "Post 3", body: ".....", userId: 2 },
//   { id: 4, title: "Post 4", body: ".....", userId: 2 },
// ];

export const getProjects = async () => {
  try {
    connectToDb();
    const projects = await Project.find();
    return projects;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch projects");
  }
};

export const getProject = async (slug) => {
  try {
    connectToDb();
    const project = await Project.findOne({ slug });
    return project;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch project");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

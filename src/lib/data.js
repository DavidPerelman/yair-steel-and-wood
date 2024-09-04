import { connectToDb } from "./connectToDb";
import { unstable_noStore as noStore } from "next/cache";
import { User } from "./models/userModel";
import { Post } from "./models/postModel";
import { Project } from "./models/projectModel";

// TEMPORARY DATA
// const users = [
//   { id: 1, username: "John" },
//   { id: 2, username: "Jane" },
// ];

// const projects = [
//   {
//     id: 1,
//     title: "Post 1",
//     body: "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni est explicabo animi eligendi aperiam illo praesentium impedit nemo minima nihil hic, eos commodi voluptatibus. Delectus eos labore repellat dolorum voluptas?",
//     userId: 1,
//   },
//   {
//     id: 2,
//     title: "Post 2",
//     body: "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni est explicabo animi eligendi aperiam illo praesentium impedit nemo minima nihil hic, eos commodi voluptatibus. Delectus eos labore repellat dolorum voluptas?",
//     userId: 1,
//   },
//   {
//     id: 3,
//     title: "Post 3",
//     body: "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni est explicabo animi eligendi aperiam illo praesentium impedit nemo minima nihil hic, eos commodi voluptatibus. Delectus eos labore repellat dolorum voluptas?",
//     userId: 2,
//   },
//   {
//     id: 4,
//     title: "Post 4",
//     body: "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni est explicabo animi eligendi aperiam illo praesentium impedit nemo minima nihil hic, eos commodi voluptatibus. Delectus eos labore repellat dolorum voluptas?",
//     userId: 2,
//   },
// ];

export const getProjects = async () => {
  try {
    connectToDb();
    const projects = await Project.find({});

    return projects;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch projects");
  }
};

export const getProject = async (slug) => {
  try {
    connectToDb();

    const project = await Project.findOne({ slug })
      .populate("division")
      .populate("material");

    return project;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch project");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();

    const post = await Post.findOne({ slug });

    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch project");
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

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
    // return users.find((user) => user.id === parseInt(id));
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};

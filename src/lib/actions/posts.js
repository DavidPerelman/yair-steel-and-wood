import { Post } from "../models/postModel";

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

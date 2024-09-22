import { unstable_noStore as noStore } from "next/cache";
import { User } from "./models/userModel";
import connectToDb from "./connectToDb";

export async function fetchData() {
  try {
    const users = await User.find();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

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

export const addProject = async (data) => {
  try {
    const newProject = fetch("http://localhost:3000/api/projects", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.log(error);
      });
    return newProject;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add Project");
  }
};

export const addReview = async (data) => {
  try {
    const newReview = fetch("http://localhost:3000/api/reviews", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.log(error);
      });
    return newReview;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add Review");
  }
};

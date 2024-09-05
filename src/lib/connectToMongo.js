"use server";

import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing database connection");
      return;
    }

    // Connecting to MongoDB
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error details:", error.message);
    throw new Error("Error connecting to database");
  }
};

// export const connectToDb = async () => {
//   try {
//     if (connection.isConnected) {
//       console.log("Using existing connection");
//       return;
//     }
//     const db = await mongoose.connect(process.env.MONGO, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     connection.isConnected = db.connections[0].readyState;
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Connection error details:", error.message);
//     throw new Error("Error connecting to database");
//   }
// };

// const { default: mongoose } = require("mongoose");

// const connection = {};

// export const connectToDb = async () => {
//   try {
//     if (connection.isConnected) {
//       // console.log("Using existing connection");
//       return;
//     }
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Error connecting to database");
//   }
// };
import mongoose from "mongoose";

const connectToDb = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URI); // No need for useNewUrlParser or useUnifiedTopology
      console.log("Successfully connected to database");
    } catch (error) {
      console.error("Error connecting to the database:", error.message);
      throw new Error("Database connection error");
    }
  }
};

export default connectToDb;

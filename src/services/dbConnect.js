import mongoose from "mongoose";

// stellt connection zwischen Mongoose + MongoDB her
const { MONGODB_URL } = process.env;

export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connectd to MongoDB");
  } catch (error) {
    console.error("ERROR: could not connect", error.message);
  }
};

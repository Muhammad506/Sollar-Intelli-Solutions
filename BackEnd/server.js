// // db.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// // Load environment variables
// dotenv.config();

// const connectDB = async () => {
//   try {
//     const mongoURI = process.env.VITE_MONGODB_URI; // Ensure this matches your .env
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     process.exit(1); // Exit the process with failure
//   }
// };

// export default connectDB;

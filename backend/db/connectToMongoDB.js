import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message)
    }
}


export default connectToMongoDB;

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables from .env file

// const connectToMongoDB = async () => {
//   try {
//     const mongoURI = process.env.MONGO_URI; // Use MONGO_URI (common convention)

//     if (!mongoURI) {
//       throw new Error("❌ Mongo URI not found in environment variables");
//     }

//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.error("❌ Error connecting to MongoDB:", error.message);
//     process.exit(1); // Stop server if DB connection fails
//   }
// };

// export default connectToMongoDB;
 
import mongoose from "mongoose";
import config from "../config/config";

const connectMongo = async () => {
  mongoose
    .connect(config.database.mongo.url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Connection error:", error));
};

export default connectMongo;

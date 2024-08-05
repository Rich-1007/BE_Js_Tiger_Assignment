import { MongoClient } from "mongodb";

let client;
const connectDB = async () => {
  if (client) {
    return client;
  }
  try {
    client = await MongoClient.connect(process.env.MONGO_URI);
    console.log("DB connected");
    return client;
  } catch (error) {
    console.log("error: ", error);
  }
};

export default connectDB;
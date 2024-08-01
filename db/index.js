import { MongoClient } from "mongodb";

let client;
const connectDB = async () => {
  if (client) {
    return client;
  }
  try {
    client = await MongoClient.connect("mongodb+srv://root:root@cluster0.o5xqgfb.mongodb.net");
    console.log("DB connected");
    return client;
  } catch (error) {
    console.log("error: ", error);
  }
};

export default connectDB;
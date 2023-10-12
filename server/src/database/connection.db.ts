import { createConnection } from "typeorm";
import ormconfig from "../ormconfig";

async function connectToDatabase() {
  try {
    const connect = await createConnection(ormconfig);
    console.log("Connected to the database");
    return connect;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

export default connectToDatabase;

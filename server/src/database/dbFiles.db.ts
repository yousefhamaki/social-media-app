import { DataSource, createConnection, getConnection } from "typeorm";
import ormconfig from "../ormconfig";

class dbFiles {
  private connection;
  async closeDatabaseConnection() {
    this.connection = getConnection(); // Get the active connection
    await this.connection.close(); // Close the connection
  }

  async initializeDatabase() {
    try {
      const connection = (await createConnection(ormconfig)) as DataSource;
      this.connection = connection;
      return connection;
    } catch (error) {
      console.error("Database connection error:", error);
    }
  }
}

export const connection = async () => {
  return await new dbFiles().initializeDatabase();
};

export default dbFiles;

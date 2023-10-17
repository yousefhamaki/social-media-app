import { DataSource } from "typeorm";
declare class dbFiles {
    private connection;
    closeDatabaseConnection(): Promise<void>;
    initializeDatabase(): Promise<DataSource>;
}
export declare const connection: () => Promise<DataSource>;
export default dbFiles;
//# sourceMappingURL=dbFiles.db.d.ts.map
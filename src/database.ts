import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "playground-app",
  synchronize: false,
  migrationsRun: true,
  entities: ["dist/src/entity/*.js"],
  migrations: ["dist/src/migration/**/*.js"],
});

dataSource.initialize();

export default dataSource;

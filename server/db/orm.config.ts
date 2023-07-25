import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";

export const dataSourceOptions:DataSourceOptions = {
	type: "postgres",
	port: parseInt(process.env.DB_PORT),
	host: process.env.DB_HOST,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: ["dist/**/entities/*.entity.js"],
  migrations: ["dist/db/migrations/*.js"],
	synchronize: true,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;


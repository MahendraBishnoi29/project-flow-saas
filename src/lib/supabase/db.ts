import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "../../../migrations/schema";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("missing DATABSE URL in env");
}

const client = postgres(process.env.DATABASE_URL as string);
const db = drizzle(client, { schema });

const migrateDB = async () => {
  try {
    console.log("🟠 Migrating Client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("🟢 Migrated Client");
  } catch (error) {
    console.log("Error migrating DB", error);
  }
};
migrateDB();

export default db;

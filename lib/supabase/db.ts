import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../migrations/schema";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("missing DATABSE URL in env");
}

const client = postgres(process.env.DATABASE_URL as string);
const db = drizzle(client, { schema });

export default db;

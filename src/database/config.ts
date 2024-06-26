import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";

const DATA_BASE_NAME = "waterApp.db";
const expoDB = openDatabaseSync(DATA_BASE_NAME);
const db = drizzle(expoDB);

export { db, DATA_BASE_NAME, expoDB };

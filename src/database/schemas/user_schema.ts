import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  gender: text("string").notNull(),
  weight: integer("weight").notNull(),
  height: integer("height").notNull(),
  age: integer("age").notNull(),
  goal: integer("goal").notNull(),
  wake_up_time: text("wake_up_time").notNull(),
  sleep_time: text("sleep_time").notNull(),
});

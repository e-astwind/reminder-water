import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const waterDrink = sqliteTable("water_drink", {
  id: text("id").primaryKey(),
  drink_ml: integer("drink_ml"),
  date: text("date"),
});

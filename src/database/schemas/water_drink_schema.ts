import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const waterDrink = sqliteTable("water_drink", {
  id: integer("id"),
  drink_ml: integer("drink_ml"),
  date: integer("date"),
});

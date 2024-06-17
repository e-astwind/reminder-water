import type { Config } from "drizzle-kit";
export default {
  schema: ["./src/database/schemas/**/*.ts"],
  out: "./drizzle",
  dialect: "sqlite",
  driver: "expo",
} satisfies Config;

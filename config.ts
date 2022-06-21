import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

export const { PORT, SECRET_KEY, MONGODB_URI } = config({ safe: true });

if (!SECRET_KEY) {
  console.log("No client secret. Set SECRET_KEY environment variable");
  Deno.exit(1);
}

if (!MONGODB_URI) {
  console.log(
    "No mongo connection string. Set MONGODB_URI environment variable"
  );
  Deno.exit(1);
}

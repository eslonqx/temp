import { MongoClient } from "https://deno.land/x/mongo@v0.30.0/mod.ts";
import { MONGODB_URI } from "../config.ts";
import log from "../utils/log.ts";

const client = new MongoClient();
await client.connect(MONGODB_URI);
log.info("Connected to MongoDb");
const db = client.database("client");

export default db;

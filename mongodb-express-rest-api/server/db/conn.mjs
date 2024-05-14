import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "mongodb+srv://KianGillespie:kXCuLP2RmrFzNwqH@cluster0.srmihye.mongodb.net/favorites";

const client = new MongoClient(connectionString);

let conn;
try {
  await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("wp1");

export default db;
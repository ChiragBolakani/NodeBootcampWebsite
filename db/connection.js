const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const url = process.env.DB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(url);

async function connect() {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log("connected");
  return client.db(dbName);
}

module.exports = connect;

const MongoClient = require("mongodb").MongoClient;

const url = `mongodb+srv://ChiragBolakani:chirag2016@cluster0.44xzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const dbName = "myFirstDatabase";

const client = new MongoClient(url);

async function connect() {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log("connected");
  return client.db(dbName);
}

module.exports = connect;

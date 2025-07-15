// sslt password



// password : lEen8ImWTmzNngIV
// databasename : sslt





import { MongoClient, ServerApiVersion } from "mongodb";




let cachedClient = null;
let cachedDb = null;


export default async function MongoDBConnection(collectionName) {

  if (cachedClient && cachedDb) {
    return cachedDb.collection(collectionName);
  }

  const uri = process.env.DB_URI;
  const dbName = process.env.DB_NAME;


  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();

  const db = client.db(dbName);
  cachedClient = client;
  cachedDb = db;

  return db.collection(collectionName);


}
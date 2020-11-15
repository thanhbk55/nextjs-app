import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb://uri0lh8bozwmlvwh5pbz:zxnN3slU8a3LTYMoy5nC@bibbdgl6jerkqlu-mongodb.services.clever-cloud.com:27017/bibbdgl6jerkqlu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('bibbdgl6jerkqlu');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;

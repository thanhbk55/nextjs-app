import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
// mongodb+srv://thanhbk55:thanh1992@cluster0.tnjxh.mongodb.net/test?retryWrites=true&w=majority

const client = new MongoClient('mongodb+srv://thanhbk55:thanh1992@cluster0.tnjxh.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('test');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;

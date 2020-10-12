import middleware from '../../database';

middleware.get(async (req, res) => {
  let doc = await req.db.collection('pages').find({}).toArray()
  res.json(doc);
});

export default middleware;
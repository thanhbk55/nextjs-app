import middleware from '../../../database';

middleware.get(async (req, res) => {
  let doc = await req.db.collection('pages').insertOne({"name": req.query.name, "content": req.query.content})
  return res.json(doc);
});

export default middleware;

import middleware from '../../../database';

middleware.get(async (req, res) => {
  console.log(req.query)
  let doc = await req.db.collection('pages').updateOne({"name": req.query.name}, { $set: {"name": req.query.name, "content": req.query.content}})
  return res.json(doc);
});

export default middleware;

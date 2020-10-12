import middleware from '../../../database';

middleware.get(async (req, res) => {
  let doc = await req.db.collection('pages').findOne({"name": req.query.id})
  res.json(doc);
});

export default middleware;
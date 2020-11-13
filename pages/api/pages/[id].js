import middleware from '../../../database';

middleware.get(async (req, res) => {
  let doc = await req.db.collection('pages').findOne({"name": req.query.id})
  return res.json(doc);
});

export default middleware;

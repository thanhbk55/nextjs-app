import middleware from '../../../database';

middleware.get(async (req, res) => {
  let doc = await req.db.collection('page_test').findOne({"name": req.query.id})
  res.json(doc);
});

export default middleware;

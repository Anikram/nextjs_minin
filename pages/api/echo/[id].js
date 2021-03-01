export default function getById(req,res) {
  res.json({yourId: req.query.id})
}
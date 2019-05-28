export default (req, res) => {
  if (!req.body) return res.status(400).send('Bad Data');

  return res.status(201).send(req.body);
};

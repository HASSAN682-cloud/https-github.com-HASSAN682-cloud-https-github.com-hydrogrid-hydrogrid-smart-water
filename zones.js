router.put('/:id', async (req, res) => {
  const { name, threshold } = req.body;
  await Zone.findByIdAndUpdate(req.params.id, { name, threshold });
  res.send({ message: 'Zone updated.' });
});

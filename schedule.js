const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

router.post('/', async (req, res) => {
  const { zone, time } = req.body;
  await Schedule.create({ zone, time });
  res.send({ message: 'Schedule saved.' });
});

module.exports = router;

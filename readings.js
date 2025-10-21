const express = require('express');
const router = express.Router();
const Reading = require('../models/Reading');
const Diagnostic = require('../models/Diagnostic');

router.post('/simulate', async (req, res) => {
  const reading = {
    zone: 'zoneA',
    value: 130,
    timestamp: new Date()
  };

  await Reading.create(reading);

  if (reading.value > 100) {
    await Diagnostic.create({
      zone: reading.zone,
      issue: 'High usage',
      recommendation: 'Inspect for leaks',
      timestamp: new Date()
    });
  }

  res.send({ message: 'Simulated reading and diagnostic created.' });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Diagnostic = require('../models/Diagnostic');

router.get('/summary', async (req, res) => {
  const diagnostics = await Diagnostic.find({});
  const summary = {
    totalDiagnostics: diagnostics.length,
    zonesAffected: [...new Set(diagnostics.map(d => d.zone))].length,
    recentIssues: diagnostics.slice(-5)
  };
  res.send(summary);
});

module.exports = router;

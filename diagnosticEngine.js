module.exports = function evaluateReading(reading) {
  const thresholds = {
    zoneA: 100,
    zoneB: 80
  };

  const threshold = thresholds[reading.zone] || 90;

  if (reading.value > threshold) {
    return {
      issue: 'High usage',
      recommendation: 'Inspect for leaks or overuse'
    };
  }

  return null;
};

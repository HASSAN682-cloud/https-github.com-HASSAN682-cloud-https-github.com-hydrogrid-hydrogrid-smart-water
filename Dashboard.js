const simulateReading = async () => {
  await fetch('/api/readings/simulate', { method: 'POST' });
  alert('Simulated diagnostic created!');
};

<button onClick={simulateReading}>🧪 Simulate Diagnostic</button>

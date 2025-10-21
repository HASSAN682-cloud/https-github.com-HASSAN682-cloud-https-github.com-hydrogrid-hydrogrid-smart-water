import React, { useEffect, useState } from 'react';

const SponsorReport = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch('/api/reports/summary')
      .then(res => res.json())
      .then(data => setReport(data));
  }, []);

  if (!report) return <p>Loading report...</p>;

  return (
    <div className="sponsor-report">
      <h3>📬 Sponsor Impact Summary</h3>
      <p>Total Diagnostics: {report.totalDiagnostics}</p>
      <p>Zones Affected: {report.zonesAffected}</p>
      <h4>Recent Issues:</h4>
      <ul>
        {report.recentIssues.map((d, i) => (
          <li key={i}>{d.zone} – {d.issue} @ {new Date(d.timestamp).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default SponsorReport;

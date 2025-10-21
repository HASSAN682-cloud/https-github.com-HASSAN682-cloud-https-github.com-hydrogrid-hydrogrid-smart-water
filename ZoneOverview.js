import React, { useEffect, useState } from 'react';

const ZoneOverview = () => {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    fetch('/api/zones')
      .then(res => res.json())
      .then(data => setZones(data));
  }, []);

  return (
    <div className="zone-overview">
      <h3>Zone Overview</h3>
      <ul>
        {zones.map(zone => (
          <li key={zone._id}>
            {zone.name} – Sensor Health: {zone.sensorHealth}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZoneOverview;

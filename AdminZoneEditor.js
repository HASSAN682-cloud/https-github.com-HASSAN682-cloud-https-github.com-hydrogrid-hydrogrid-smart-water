import React, { useEffect, useState } from 'react';

const AdminZoneEditor = () => {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    fetch('/api/zones')
      .then(res => res.json())
      .then(data => setZones(data));
  }, []);

  const updateZone = async (id, name, threshold) => {
    await fetch(`/api/zones/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, threshold })
    });
    alert('Zone updated!');
  };

  return (
    <div className="admin-zone-editor">
      <h3>🧭 Manage Zones</h3>
      {zones.map(zone => (
        <div key={zone._id}>
          <input
            defaultValue={zone.name}
            onBlur={e => updateZone(zone._id, e.target.value, zone.threshold)}
          />
          <input
            type="number"
            defaultValue={zone.threshold}
            onBlur={e => updateZone(zone._id, zone.name, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminZoneEditor;

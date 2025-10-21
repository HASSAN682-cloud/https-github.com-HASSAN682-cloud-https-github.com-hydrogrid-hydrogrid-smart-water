import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const UsageCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/readings?zone=zoneA')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="usage-charts">
      <h3>Water Usage – Zone A</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="value" stroke="#0077cc" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageCharts;

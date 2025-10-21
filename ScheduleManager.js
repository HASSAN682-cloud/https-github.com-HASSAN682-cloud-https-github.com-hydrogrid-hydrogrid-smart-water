import React, { useState } from 'react';

const ScheduleManager = () => {
  const [schedule, setSchedule] = useState({ zone: '', time: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(schedule)
    });
    alert('Schedule saved!');
  };

  return (
    <div className="schedule-manager">
      <h3>Daily Check Scheduler</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Zone ID"
          value={schedule.zone}
          onChange={e => setSchedule({ ...schedule, zone: e.target.value })}
        />
        <input
          type="time"
          value={schedule.time}
          onChange={e => setSchedule({ ...schedule, time: e.target.value })}
        />
        <button type="submit">📅 Save Schedule</button>
      </form>
    </div>
  );
};

export default ScheduleManager;

import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    bookingDuration: 1, // in hours
    maxBookingsPerDay: 5,
    allowWeekends: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    // Save settings to API
    fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    alert('Settings saved successfully');
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form>
        <label>Booking Duration (hours):
          <input type="number" name="bookingDuration" value={settings.bookingDuration} onChange={handleChange} />
        </label>
        <label>Max Bookings Per Day:
          <input type="number" name="maxBookingsPerDay" value={settings.maxBookingsPerDay} onChange={handleChange} />
        </label>
        <label>Allow Weekend Bookings:
          <input type="checkbox" name="allowWeekends" checked={settings.allowWeekends} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleSave}>Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;

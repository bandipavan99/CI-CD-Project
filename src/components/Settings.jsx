import React from 'react';
import './Settings.css';

export default function Settings() {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form>
        <label>
          Email Notifications
          <input type="checkbox" />
        </label>
        <label>
          Dark Mode
          <input type="checkbox" />
        </label>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

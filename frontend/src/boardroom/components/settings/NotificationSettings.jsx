import './NotificationSettings.scss';

const NotificationSettings = () => {
  return (
    <div className="notification-settings">
      <h2>Notification Settings</h2>
      <form>
        <label>
          Email Notifications:
          <input type="checkbox" />
        </label>
        <label>
          SMS Notifications:
          <input type="checkbox" />
        </label>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default NotificationSettings;

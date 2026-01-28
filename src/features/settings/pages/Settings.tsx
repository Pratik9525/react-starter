import "./Settings.css";

const Settings = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account and preferences</p>
      </div>

      <div className="settings-layout">
        <div className="settings-sidebar">
          <button className="settings-nav-item active">Profile</button>
          <button className="settings-nav-item">Security</button>
          <button className="settings-nav-item">Notifications</button>
          <button className="settings-nav-item">Preferences</button>
          <button className="settings-nav-item">Billing</button>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h2>Profile Information</h2>
            <div className="settings-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" defaultValue="John Doe" className="form-input" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" defaultValue="john.doe@example.com" className="form-input" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" className="form-input" />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  className="form-textarea"
                  rows={4}
                  defaultValue="Software developer passionate about creating great user experiences."
                ></textarea>
              </div>
              <button className="btn-save">Save Changes</button>
            </div>
          </div>

          <div className="settings-section">
            <h2>Account Settings</h2>
            <div className="settings-options">
              <div className="setting-option">
                <div>
                  <h3>Email Notifications</h3>
                  <p>Receive email updates about your account activity</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="setting-option">
                <div>
                  <h3>Push Notifications</h3>
                  <p>Get notified about important updates</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="setting-option">
                <div>
                  <h3>Two-Factor Authentication</h3>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="settings-section danger-zone">
            <h2>Danger Zone</h2>
            <div className="danger-actions">
              <div className="danger-item">
                <div>
                  <h3>Delete Account</h3>
                  <p>Permanently delete your account and all associated data</p>
                </div>
                <button className="btn-danger">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

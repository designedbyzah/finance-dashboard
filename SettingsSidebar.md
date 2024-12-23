import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from "react-router-dom";

export default function SettingsSidebar() {
  return (
    <div className="settings-sidebar">
      <h2>Settings</h2>
      <div className="search-bar">
        <CiSearch />
        <input type="text" />
      </div>
      <div className="settings-sidebar-links">
        {/* profile */}

        <NavLink>
          <div className="menu-item-container">
            <RxAvatar />
            <p>Profile</p>
          </div>
        </NavLink>

        {/* notification */}
        <NavLink>
          <div className="menu-item-container">
            <RxAvatar />
            <p>Notification</p>
          </div>
        </NavLink>

        {/* preference */}
        <NavLink>
          <div className="menu-item-container">
            <RxAvatar />
            <p>Preference</p>
          </div>
        </NavLink>

        {/* integrations

         */}
        <NavLink>
          <div className="menu-item-container">
            <RxAvatar />
            <p>Integrations</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

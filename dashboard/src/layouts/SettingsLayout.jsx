import { Outlet } from "react-router-dom";
import Settings from "../components/settings/Settings";
import styles from "../components/settings/Settings.module.css";

export default function SettingsLayout() {
  return (
    <div className={styles.settingsContainer}>
      <Settings />

      <div className={styles.settingsContentArea}>
        <Outlet />
      </div>
    </div>
  );
}

import { Avatar } from "custom-avatar-component";
import { AiOutlineEdit } from "react-icons/ai";
import styles from "../settings/Settings.module.css";

export default function Profile() {
  return (
    <div className={styles.contentAreaContainer}>
      <div className={styles.titleAndSubtextContainer}>
        <h2>My profile</h2>
        <p>Manage your photo and personal information.</p>
      </div>

      <div className={styles.myProfileSection}>
        <div className={styles.addProfilePhoto}>
          <Avatar name="John Lamm" size={80} bgcolor="#2D3A47" fontColor="#FFFFFF" radius={1000} />
          <button>
            Edit <AiOutlineEdit color="#4e4e4e" fontSize="1rem" />
          </button>
        </div>
        <div className={styles.fullnameAndEmailContainer}>
          <div className={styles.fullnameContainer}>
            <p>Full name</p>
            <h4>John Lamm</h4>
          </div>
          <div className={styles.emailContainer}>
            <p>Email address</p>
            <h4>JohnLamm@emailtest.com</h4>
          </div>
        </div>
        {/* <div className={styles.horizontalDividier}></div> */}
      </div>
    </div>
  );
}

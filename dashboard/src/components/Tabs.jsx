import { useNavigate } from "react-router-dom";
import styles from "./Tabs.module.css";
import { useState } from "react";

export default function Tabs({ ButtonText1, ButtonText2, ButtonText3 }) {
  const [activeTab, setActiveTab] = useState("fiat");
  const navigate = useNavigate();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(tabName);
  };

  return (
    <div className={styles.tabContainer}>
      <button
        className={activeTab === "fiat" ? styles.isActiveTab : ""}
        onClick={() => handleTabClick("fiat")}
      >
        {ButtonText1}
      </button>

      <button
        className={activeTab === "crypto" ? styles.isActiveTab : ""}
        onClick={() => handleTabClick("crypto")}
      >
        {ButtonText2}
      </button>

      <button
        className={activeTab === "total" ? styles.isActiveTab : ""}
        onClick={() => handleTabClick("total")}
      >
        {ButtonText3}
      </button>
    </div>
  );
}

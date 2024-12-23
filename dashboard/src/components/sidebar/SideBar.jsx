import SideBarLink from "./SideBarLink";
import expensesIcon from "../../assets/expenses-icon.svg";
import incomeIcon from "../../assets/income-icon.svg";
import investmentIcon from "../../assets/investment-icon.svg";
import settingsIcon from "../../assets/settings-icon.svg";
import smsIcon from "../../assets/sms-alert-icon.svg";
import logo from "../../assets/logo.svg";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { useContext } from "react";
import { isCollapsed } from "../../layouts/RootLayout";

export default function SideBar() {
  const { isSideBarCollapsed, setIsSideBarCollapsed } = useContext(isCollapsed);

  function handleSideBarCollapse() {
    setIsSideBarCollapsed((prevState) => !prevState);
  }

  return (
    <aside className={`sidebar-container ${isSideBarCollapsed ? "collapsed" : ""}`}>
      {/* Logo */}
      <div className={`logo-and-collapse-icon-container ${isSideBarCollapsed ? "collapsed" : ""}`}>
        <img src={logo} alt="logo" />
        <TbLayoutSidebarLeftCollapse
          className={`collapse-icon ${isSideBarCollapsed ? "collapsed" : ""}`}
          onClick={handleSideBarCollapse}
        />
      </div>

      <div className="sidebarlinks-container">
        {/* Income */}
        <SideBarLink
          linkTitle="Income"
          linkSubText="Click to see how much income you've made"
          icon={incomeIcon}
          to="income"
          isSideBarCollapsed={isSideBarCollapsed}
        />

        {/* Expenses */}
        <SideBarLink
          linkTitle="Expenses"
          linkSubText="Click to see how much you've spent"
          icon={expensesIcon}
          to="expenses"
          isSideBarCollapsed={isSideBarCollapsed}
        />

        {/* Sms Alerts */}
        <SideBarLink
          linkTitle="SMS alerts"
          linkSubText="Click to see your financial SMS notifications"
          icon={smsIcon}
          to="sms"
          isSideBarCollapsed={isSideBarCollapsed}
        />

        {/* Investments */}
        <SideBarLink
          linkTitle="Investments"
          linkSubText="Click to see how much you've invested"
          icon={investmentIcon}
          to="investments"
          isSideBarCollapsed={isSideBarCollapsed}
        />

        {/* Settings */}
        <SideBarLink
          linkTitle="Settings"
          linkSubText="Click to change you settings"
          icon={settingsIcon}
          to="settings"
          isSideBarCollapsed={isSideBarCollapsed}
        />
      </div>
    </aside>
  );
}

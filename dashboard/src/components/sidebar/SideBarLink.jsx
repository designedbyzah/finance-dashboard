import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function SideBarLink({ icon, linkTitle, linkSubText, to, isSideBarCollapsed }) {
  // style for nav link icons on sidebar collapse
  const sidebarLinkIconStyles = {
    width: "40px",
    height: "40px",
  };

  // style for nav links title and subtext on sidebar collapse
  const titleSubtextstyles = {
    display: "none",
  };

  return (
    <NavLink to={to}>
      <div className={`menu-container ${isSideBarCollapsed ? "collapsed" : ""}`}>
        <div className={`icon-container ${isSideBarCollapsed ? "collapsed" : ""}`}>
          <img src={icon} alt={linkTitle} />
        </div>
        <div className="link-title-and-subtext-container">
          <h1
            className={`link-title-and-subtext-container ${isSideBarCollapsed ? "collapsed" : ""}`}
          >
            {linkTitle}
          </h1>
          <p
            className={`link-title-and-subtext-container ${isSideBarCollapsed ? "collapsed" : ""}`}
          >
            {linkSubText}
          </p>
        </div>
      </div>
    </NavLink>
  );
}

<div className="menu-container collapsed"></div>;

// PropTypes Validation
SideBarLink.propTypes = {
  linkTitle: PropTypes.string,
  linkSubText: PropTypes.string,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isSideBarCollapsed: PropTypes.bool,
  // titleSubtextstyles: PropTypes.object,
  // sidebarLinkIconStyles: PropTypes.object,
};

import React from "react";
import "../styles/LayoutStyles.css";
import { SidebarMenu } from "../Data/data";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>DOC PRO</h6>
              <hr />
            </div>

            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <React.Fragment>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="content">
            <div className="header">header</div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;

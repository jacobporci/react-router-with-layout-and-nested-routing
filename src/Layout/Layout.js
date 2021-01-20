import React from "react";

import "./styles.css";

export const Layout = ({ children }) => (
  <div className="container">
    <div className="side-nav" />
    <div className="content">{children}</div>
  </div>
);

export default Layout;

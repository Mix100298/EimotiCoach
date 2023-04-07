import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <section className="flex">
      <Sidebar/>
      <div>
          {children}
      </div>
    </section>
  );
};

export default Layout;
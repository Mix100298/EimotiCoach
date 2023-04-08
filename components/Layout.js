import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <section className="flex">
      <Sidebar/>
      <div>
          <Header />
          {children}
      </div>
    </section>
  )
}

export default Layout;
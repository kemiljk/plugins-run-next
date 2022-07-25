import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="mb-8">
      <Nav />
      <main className="w-full max-w-5xl mx-auto justify-center h-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;

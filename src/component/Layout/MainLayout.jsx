import React from "react";
import "../../style/main-layout.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <aside className="main-layout-aside">
        <Navigation />
      </aside>
      <main className="main-layout-main main-screen flex justify-between flex-col">
        {children}
        <Footer />
      </main>
    </div>
  );
}

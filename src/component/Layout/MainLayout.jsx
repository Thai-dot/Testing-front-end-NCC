import React from "react";
import "../../style/main-layout.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <aside className="col-span-1">
        <Navigation />
      </aside>
      <main className="col-span-11 main-screen flex justify-between flex-col">
        {children}
        <Footer />
      </main>
    </div>
  );
}

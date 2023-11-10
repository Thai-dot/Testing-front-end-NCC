import React from "react";
import "../../style/home.css";
import LogoSection from "../../component/Page/Home/LogoSection";
import HeroSection from "../../component/Page/Home/HeroSection";
import ValueSection from "../../component/Page/Home/ValueSection";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="flex-center justify-center">
        <LogoSection />
      </div>
      <HeroSection />
      <ValueSection />
    </div>
  );
}

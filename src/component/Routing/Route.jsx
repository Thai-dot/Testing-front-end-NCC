import React, { useEffect, useState } from "react";

const Route = ({ path, component }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleStateChange = () => {
      setCurrentPath(window.location.pathname);
    };
    // Listen for both popstate and pushstate events
    window.addEventListener("popstate", handleStateChange);
    window.addEventListener("pushstate", handleStateChange);
    return () => {
      window.removeEventListener("popstate", handleStateChange);
      window.removeEventListener("pushstate", handleStateChange);
    };
  }, []);

  return currentPath === path ? React.createElement(component) : null;
};

export default Route;

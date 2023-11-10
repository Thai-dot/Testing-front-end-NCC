import React from "react";

const Link = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    /* eslint-disable no-restricted-globals */
    history.pushState(null, "", to);
    // Dispatch a custom pushstate event to notify the Route component
    window.dispatchEvent(new Event("pushstate"));
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
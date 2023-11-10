import React from "react";
import Link from "../../Routing/Link";
import "../../../style/navigation.css";

export default function Navigation() {
  const [currentPath, setCurrentPath] = React.useState(window.location.href);

  const navArr = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Services",
      to: "/service",
    },
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  const currentPathname = window.location.pathname;
  console.log(currentPathname);

  return (
    <nav className="navigation flex flex-col">
      {navArr.map((page) => {
        return (
          <Link key={page.name} to={page.to}>
            <div
              className={`nav-item ${currentPath === page.to ? "active" : ""}`}
              onClick={() => setCurrentPath(page.to)}
            >
              {page.name}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

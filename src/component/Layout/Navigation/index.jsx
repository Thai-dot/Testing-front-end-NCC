import React from "react";
import Link from "../../Routing/Link";
import "../../../style/navigation.css";

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

function NavList() {
  const [currentPath, setCurrentPath] = React.useState(window.location.href);

  return (
    <>
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
    </>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="navigation flex flex-col">
      <div className="navigation-desktop">
        <NavList />
      </div>
      <div className="navigation-mobile">
        <div className="flex-center">
          {!isOpen ? (
            <i class="fa fa-bars bar-icon" onClick={() => setIsOpen(true)}></i>
          ) : (
            <i
              class="fa fa-close close-icon"
              onClick={() => setIsOpen(false)}
            ></i>
          )}

          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "white",
            }}
          >
            NCC
          </div>
        </div>
        {isOpen && <NavList />}
      </div>
    </nav>
  );
}

import "./NavBar.css";
import { Switch } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavBar({ onNavItemClick }) {
  const [activeNavItem, setActiveNavItem] = useState("MainInformation");

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
    onNavItemClick(itemName);
  };
  return (
    <>
      <nav className="portfolio-nav">
        <div className="switch-container">
          <FontAwesomeIcon icon={faGamepad} />
          <Switch size="md" className="navbar-switch" />
          <FontAwesomeIcon icon={faUserTie} />
        </div>
        <div className="portfolio-links-container">
          <a
            className={`portfolio-menu-item ${
              activeNavItem === "MainInformation" ? "active-link" : ""
            }`}
            onClick={() => handleNavItemClick("MainInformation")}
          >
            About
          </a>
          <a
            className={`portfolio-menu-item ${
              activeNavItem === "Quests" ? "active-link" : ""
            }`}
            onClick={() => handleNavItemClick("Quests")}
          >
            Quests
          </a>
          <a
            className={`portfolio-menu-item ${
              activeNavItem === "Inventory" ? "active-link" : ""
            }`}
            onClick={() => handleNavItemClick("Inventory")}
          >
            Inventory
          </a>
        </div>
      </nav>
    </>
  );
}

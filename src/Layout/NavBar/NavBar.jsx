import "./NavBar.css";
import { Switch } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCopy, useTheme } from "../../Context/toggleContext";

export default function NavBar({ onNavItemClick }) {
  const [activeNavItem, setActiveNavItem] = useState("MainInformation");
  const { theme, toggleTheme } = useTheme();
  const { nav } = useCopy();

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
    onNavItemClick(itemName);
  };

  return (
    <nav
      className={`portfolio-nav ${
        theme === "videoGame" ? "video-game-theme" : "professional-theme"
      }`}
    >
      <div className="switch-container">
        <FontAwesomeIcon icon={faGamepad} />
        <Switch size="md" className="navbar-switch" onChange={toggleTheme} />
        <FontAwesomeIcon icon={faUserTie} />
      </div>
      <div className="portfolio-links-container">
        {nav.map((link) => (
          <a
            key={link.id}
            className={`portfolio-menu-item ${
              activeNavItem === link.id ? "active-link" : ""
            }`}
            onClick={() => handleNavItemClick(link.id)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

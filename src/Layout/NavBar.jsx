import "./NavBar.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavBar() {
  const { t } = useTranslation();
  const [showNav, setShowNav] = useState(false);

  const toggleItems = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className='chbi-navbar'>
      <div className='chbi-nav-container'>
        <div className='chbi-logo-container'>
          <h1>KB</h1>
        </div>
        <div className="chbi-mobile-icon" onClick={toggleItems}>
        <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`chbi-nav-elements  ${showNav && 'active'}`}>
          <ul>
            <li>
              <a className='chbi-links' href="#home">
              {t("home")}
              </a>
            </li>
            <li>
              <a className='chbi-links'>
              {t("About")}
              </a>
            </li>
            <li>
              <a className='chbi-links' href="#projects">
              {t("Projects")}
              </a>
            </li>
            <li>
              <a className='chbi-links' href='#contact'>
              {t("contact")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

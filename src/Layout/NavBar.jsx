import "./NavBar.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "./NavLinks/NavLinks";
export default function NavBar() {
  const { t } = useTranslation();
  const [showNav, setShowNav] = useState(false);

  const toggleItems = () => {
    setShowNav(!showNav);
  };

  const closeNav = (to) => {
    setShowNav(false);
  }

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
          <div className='chbi-mobile-exit' onClick={closeNav}>
          <FontAwesomeIcon icon={faX} />
          </div>
          <ul>
            <NavLink to="#home" label={t('home')} onClick={closeNav} />
            <NavLink to="#about" label={t("About")} onClick={closeNav} />
            <NavLink to="#skills" label={t("Skills")} onClick={closeNav}/>
            <NavLink to="#projects" label= {t("Projects")} onClick={closeNav}/>
            <li>
              <a className='chbi-links' href='#contact'  onClick={closeNav}>
              {t("contact")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

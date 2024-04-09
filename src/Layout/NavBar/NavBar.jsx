import "./NavBar.css";
import { Switch } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faUserTie } from '@fortawesome/free-solid-svg-icons';



export default function NavBar({onNavItemClick}) {
  return (
    <>
      <nav className="portfolio-nav">
        <div className='switch-container'>
        <FontAwesomeIcon icon={faGamepad} />
          <Switch size='md' className='navbar-switch'/>
          <FontAwesomeIcon icon={faUserTie} />
        </div>
        <div className="portfolio-links-container">
          <a className="portfolio-menu-item" onClick={() => onNavItemClick('MainInformation')}>About</a>
          <a className="portfolio-menu-item"
          onClick={() => onNavItemClick('Quests')}>Quests</a>
          <a className="portfolio-menu-item" onClick={() => onNavItemClick('Inventory')}>Inventory</a>
        </div>
      </nav>
    </>
  );
}

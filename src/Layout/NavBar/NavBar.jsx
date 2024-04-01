import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="portfolio-nav">
        <div className='portfolio-links-container'>
          <a className='portfolio-menu-item'>About</a>
          <a className='portfolio-menu-item'>Quests</a>
          <a className='portfolio-menu-item'>Key Items</a>
          <a className='portfolio-menu-item'>DM</a>
        </div>
      </nav>
    </>
  );
}
